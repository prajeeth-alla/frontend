import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CreateOrEditVehicleForm } from '../create-or-edit-vehicle/create-or-edit-vehicle-form';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { VehicleService } from '../../../core/services/vehicle-service/vehicle-service';
import { VehicleDetail, VehicleForm } from '../../../core/models/vehicle.model';

@Component({
  selector: 'app-edit-vehicle',
  imports: [CreateOrEditVehicleForm],
  templateUrl: './edit-vehicle.html',
  styleUrl: './edit-vehicle.scss',
})
export class EditVehicle implements OnInit {
  public vehicleId: number = 0;
  private readonly route = inject(ActivatedRoute);
  private readonly vehicleService = inject(VehicleService);
  private readonly cdr = inject(ChangeDetectorRef);
  vehicleDetails: VehicleForm | undefined;

  transformToVehicleFormFieldsData(data: VehicleDetail | null | undefined): VehicleForm | undefined {
    if (!data) return undefined;
    return {
      rooftop_id: data.rooftop_id,
      make: data.make,
      model: data.model,
      year: data.year,
      veh_listing_type: data.veh_listing_type ?? null,
      trim: data.trim,
      body_type: data.body_type,
      ext_color: data.ext_color,
      engine: data.engine,
      miles: data.miles,
      status: data.status,
    } as unknown as VehicleForm;
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.vehicleId = Number(params.get('vehicleId'));
          return this.vehicleService.getVehicleDetailsById(this.vehicleId);
        })
      )
      .subscribe((data) => {
        this.vehicleDetails = this.transformToVehicleFormFieldsData(data);
        console.log("vehicleDetails",this.vehicleDetails);
        this.cdr.detectChanges();
      });
  }
}
