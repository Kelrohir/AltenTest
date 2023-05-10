import { Product } from "../../../types/product";
import { JsonDB, Config } from "node-json-db";
import {v4 as uuidv4} from 'uuid';


export class ProductsService {
  
  database = new JsonDB(new Config("./data/products.json", true, false, '/'));

  async create(newProduct: Product): Promise<Product[]> {
    newProduct.id = uuidv4();
    await this.database.push("/data[]", newProduct, true);

    let products = await this.database.getObject<Product[]>("/data");
    return products;
  }

  async findAll(): Promise<Product[]> {
    return await this.database.getObject<Product[]>("/data");
  }
  
  async findOneById(productId: string): Promise<Product> {
    return (await this.database.getObject<Product[]>("/data")).find( x => x.id == productId) as Product;
  }
  
  async updateOneById(productId: string, updatedProduct: Product): Promise<Product> {
    let productIndex = await this.database.getIndex("/data", productId);

    if(productIndex !== -1){
      await this.database.delete(`/data[${productIndex}]`);  
      await this.database.push("/data[]", updatedProduct, true);  
    }

    return (await this.database.getObject<Product[]>("/data")).find( x => x.id == productId) as Product;
  }

  async deleteOneById(productId: string) {
    let productIndex = await this.database.getIndex("/data", productId);

    if(productIndex){
      await this.database.delete(`/data[${productIndex}]`);
    }
  }
}
