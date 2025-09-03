import { Injectable } from '@angular/core';
import { userFormConfig } from '../Config/user-form.config';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {

  constructor(private http: HttpClient) { }

  getFormConfig(): Observable<any> {
    return of(userFormConfig);
  }
}
