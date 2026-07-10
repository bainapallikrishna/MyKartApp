import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../Shared/config/api-endpoints';
import { User } from '../Pages/user/user';
import { Category } from '../Pages/category/category';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl=environment.apiUrl;
  constructor(private http: HttpClient) {}
  getCategories() {
    console.log('API URL:', API_ENDPOINTS.category);
    return this.http.get<Category[]>(`${API_ENDPOINTS.category}`);
  }

}
