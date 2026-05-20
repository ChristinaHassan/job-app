import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AuthResponse {
  token: string;
  user: {
    id: number;
    email: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/auth';


  isLoggedIn(): boolean {
  return !!this.getToken();
  }
  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, {
      email,
      password,
    });
  }

  signin(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/signin`, {
      email,
      password,
    });
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
