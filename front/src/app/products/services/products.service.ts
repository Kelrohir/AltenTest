import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../../shared/class/product.class';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

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

}
