import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { API_ENDPOINTS } from '../Shared/config/api-endpoints';
import { Observable } from 'rxjs';
import { AuthResult, LoginRequest } from '../Shared/models/models';
import { tap } from 'rxjs/operators';
const TOKEN_KEY = 'accessToken';
const REFRESH_KEY = 'refreshToken';
@Injectable({
  providedIn: 'root',
})
export class Authservice {
    readonly isLoggedIn = signal(!!localStorage.getItem(TOKEN_KEY));
  constructor(private http: HttpClient) {}
url=environment.apiUrl;
  login(request: LoginRequest) {
    return this.http.post<AuthResult>(API_ENDPOINTS.auth.token, request).pipe(
      tap(result => this.storeTokens(result))
    );
  }

 private storeTokens(result: AuthResult): void {
    localStorage.setItem(TOKEN_KEY, result.accessToken);
    localStorage.setItem(REFRESH_KEY, result.refreshToken);
    this.isLoggedIn.set(true);
    
  }
  }

