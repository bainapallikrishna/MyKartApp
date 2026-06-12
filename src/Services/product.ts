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


  constructor(private httpClient: HttpClient) {
  }
 getProducts() {
    console.log('API URL:', `${this.apiUrl}/product/Product`);
    return this.httpClient.get<any[]>(`${this.apiUrl}/product/Product`);
    
  }
}
