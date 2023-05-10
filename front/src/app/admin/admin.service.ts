import { Injectable } from '@angular/core';
import { Product } from '../shared/class/product.class';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl: string = "http://localhost:3000/"
  private products: Product[] = null;
  private products$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    this.http.get<Product[]>(`${this.baseUrl}products`).subscribe(data => {
      this.products = data;
      this.products$.next(this.products);
    });

    return this.products$;
  }

  createProduct(updatedProduct: Product): Observable<Product[]> {
    this.http.post<Product[]>(`${this.baseUrl}products`, updatedProduct).subscribe(data => {
      this.products = data;
      this.products$.next(this.products);
    });

    return this.products$;
  }

  updateProduct(productId: string, updatedProduct: Product): Observable<Product[]> {
    this.http.patch<Product[]>(`${this.baseUrl}products/${productId}`, updatedProduct).subscribe(data => {
      this.products = data;
      this.products$.next(this.products);
    });

    return this.products$;
  }

  deleteProduct(productId: string): Observable<Product[]> {
    this.http.delete<Product[]>(`${this.baseUrl}products/${productId}`).subscribe(data => {
      this.products = data;
      this.products$.next(this.products);
    });

    return this.products$;
  }
}
