import { inject, Injectable, signal } from '@angular/core';
import { Vehicle } from '../../models/vehicle.model';
import { of, tap } from 'rxjs';
import { ApiService } from '../api-service/api-service';
import { Rooftop } from '../../models/rooftops.model';
import { VEHICLES_MOCK } from '../../../../mocks/vehicle.mock';
import { ROOFTOPS_MOCK } from '../../../../mocks/rooftop.mock';
import { Helper } from '../helper/helper';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  rooftops$ = signal<Rooftop[]>([]);
  vehicles$ = signal<Vehicle[]>([]);

  private readonly helper = inject(Helper);
  private readonly apiService = inject(ApiService);
  getAllVehicles() {
    if (this.helper.isMock) {
      return of(VEHICLES_MOCK).pipe(tap((vehicles) => this.vehicles$.set(vehicles)));
    } else {
      return this.apiService
        .get<Vehicle[]>('vehicles')
        .pipe(tap((vehicles) => this.vehicles$.set(vehicles)));
    }
  }

  getRooftops() {
    if (this.helper.isMock) {
      return of(ROOFTOPS_MOCK).pipe(tap((rooftops) => this.rooftops$.set(rooftops)));
    } else {
      return this.apiService
        .get<Rooftop[]>('rooftops')
        .pipe(tap((rooftops) => this.rooftops$.set(rooftops)));
    }
  }
}
