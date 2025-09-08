import { inject, Injectable, signal } from '@angular/core';
import { Vehicle, Vehicle360SpinList, VehicleDetail, VehicleImagesList, VehicleVideoList } from '../../models/vehicle.model';
import { Observable, of, tap } from 'rxjs';
import { ApiService } from '../api-service/api-service';
import { Rooftop } from '../../models/rooftops.model';
import { ROOFTOPS_MOCK } from '../../../../mocks/rooftop.mock';
import { Helper } from '../helper/helper';
import { VEHICLES_MOCK } from '../../../../mocks/vehicle.mock';
import { VEHICLES_DETAILS_MOCK } from '../../../../mocks/vehicle-details.mock';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  rooftops$ = signal<Rooftop[]>([]);
  vehicles$ = signal<Vehicle[]>([]);

  private readonly helper = inject(Helper);
  private readonly apiService = inject(ApiService);

  getAllVehicles(): Observable<Vehicle[]> {
    if (this.helper.isMock) {
      return of(VEHICLES_MOCK).pipe(tap((vehicles) => this.vehicles$.set(vehicles)));
    } else {
      return this.apiService
        .get<Vehicle[]>('vehicles')
        .pipe(tap((vehicles) => this.vehicles$.set(vehicles)));
    }
  }

  getVehicleDetailsById(vehicleId: number): Observable<VehicleDetail | null | undefined> {
    if (this.helper.isMock) {
      const vehicleDetails = this.helper.binarySearch(VEHICLES_DETAILS_MOCK, vehicleId, 'id');
      return of(vehicleDetails);
    } else {
      // return this.apiService.get<VehicleDetail>(`vehicles/${vehicleId}`);
      return this.apiService.get<VehicleDetail>(`vehicles/7`);
    }
  }

  getVehicleVideo(vehicleId: number): Observable<VehicleVideoList | null | undefined> {
    if (this.helper.isMock) {
      const vehicleDetails = this.helper.binarySearch(VEHICLES_DETAILS_MOCK, vehicleId, 'id');
      return of(vehicleDetails?.videos);
    } else {
      // return this.apiService.get<VehicleDetail>(`/videos/vehicle/${vehicleId}`);
      return this.apiService.get<VehicleVideoList>(`/videos/vehicle/7`);
    }
  }

  getVehicleImages(vehicleId: number) {
    if (this.helper.isMock) {
      const vehicleDetails = this.helper.binarySearch(VEHICLES_DETAILS_MOCK, vehicleId, 'id');
      return of(vehicleDetails?.images);
    } else {
      // return this.apiService.get<VehicleImagesList>(`/images/vehicle/${vehicleId}`);
      return this.apiService.get<VehicleImagesList>(`/images/vehicle/7`);
    }
  }
  
  getVehicle360Spin(vehicleId: number) {
    if (this.helper.isMock) {
      const vehicleDetails = this.helper.binarySearch(VEHICLES_DETAILS_MOCK, vehicleId, 'id');
      return of(vehicleDetails?.spins);
    } else {
      // return this.apiService.get<Vehicle360SpinList>(`/spins/vehicle/${vehicleId}`);
      return this.apiService.get<Vehicle360SpinList>(`/spins/vehicle/7`);
    }
  }

  getRooftops(): Observable<Rooftop[]> {
    if (this.helper.isMock) {
      return of(ROOFTOPS_MOCK).pipe(tap((rooftops) => this.rooftops$.set(rooftops)));
    } else {
      return this.apiService
        .get<Rooftop[]>('rooftops')
        .pipe(tap((rooftops) => this.rooftops$.set(rooftops)));
    }
  }
}
