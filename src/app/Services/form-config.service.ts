import { Injectable } from '@angular/core';
import { userFormConfig } from '../Config/user-form.config';
import { Observable, of } from 'rxjs';
import { vehicleFormConfig } from '../Config/vehicle-form.config';

@Injectable({
  providedIn: 'root',
})
export class FormConfigService {
  getUserFormConfig(): Observable<any> {
    return of(userFormConfig);
  }

  getVehicleFormConfig(): Observable<any> {
    return of(vehicleFormConfig);
  }
}
