import { Injectable } from '@angular/core';
import { JWTPayload } from '../../models/app.model';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly tokenKey = 'auth_token';

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private decodeToken(token: string): JWTPayload | null {
    const payload = token.split('.')[1];
    const decoded = atob(payload);
    return JSON.parse(decoded);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    const payload = token ? this.decodeToken(token) : null;

    const exp = payload?.exp ?? 0;
    const now = Math.floor(Date.now() / 1000);

    return exp > now;
  }

  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    const payload = this.decodeToken(token);
    return payload?.role || null;
  }

  login(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
