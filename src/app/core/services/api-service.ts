import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = environment.apiUrl; // e.g. http://localhost:3000 OR https://api.example.com

  constructor(private readonly http: HttpClient) {}

  private resolveUrl(endpoint: string): string {
    const lower = endpoint.toLowerCase();
    const isFullUrl = lower.startsWith('http://') || lower.startsWith('https://');

    if (isFullUrl) {
      return endpoint;
    }

    return `${this.baseUrl.replace(/\/$/, '')}/${endpoint.replace(/^\//, '')}`;
  }

  get<T>(endpoint: string, params?: Record<string, any>): Observable<T> {
    return this.http.get<T>(this.resolveUrl(endpoint), {
      params: new HttpParams({ fromObject: params || {} }),
    });
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(this.resolveUrl(endpoint), body);
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http.put<T>(this.resolveUrl(endpoint), body);
  }

  patch<T>(endpoint: string, body: any): Observable<T> {
    return this.http.patch<T>(this.resolveUrl(endpoint), body);
  }

  delete<T>(endpoint: string, params?: Record<string, any>): Observable<T> {
    return this.http.delete<T>(this.resolveUrl(endpoint), {
      params: new HttpParams({ fromObject: params || {} }),
    });
  }
}
