import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { API_ENDPOINTS } from '../Shared/config/api-endpoints';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Product {
  private products: any[] = [];
private apiUrl = environment.apiUrl;
private productEndpoint = API_ENDPOINTS.product;

  constructor(private httpClient: HttpClient) {


  }

  getProducts():Product[] {
return this.httpClient.get<Product[]>(this.productEndpoint);
  }
}
