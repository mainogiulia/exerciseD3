import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iProduct } from '../interface/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl: string = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<iProduct[]> {
    return this.http.get<iProduct[]>(this.apiUrl);
  }
}
