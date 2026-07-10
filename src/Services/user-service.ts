import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { API_ENDPOINTS } from '../Shared/config/api-endpoints';
import { User } from '../Pages/user/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) {

  }
  getusers() {
console.log('API URL:', API_ENDPOINTS.user);

return this.http.get<User[]>(`${API_ENDPOINTS.user}`); 
  
  
  }
}
