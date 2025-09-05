import { Component, inject, OnInit } from '@angular/core';
import { vehicleFormConfig } from '../../../Config/vehicle-form.config';
import { DynamicformComponent } from '../dynamicform.component';
import { FormConfigService } from '../../../Services/form-config.service';

@Component({
  selector: 'app-vehicle-form',
  imports: [DynamicformComponent],
  templateUrl: './vehicle-form.html',
  styleUrl: './vehicle-form.scss'
})
export class VehicleForm implements OnInit {
  formConfig: any;
  private readonly configService = inject(FormConfigService);

  ngOnInit(): void {
    this.configService.getVehicleFormConfig().subscribe((config: any) => {
      this.formConfig = config;
    });
  }

  handleFormSubmit(formData: any) {
    console.log('Parent received form values:', formData);
  }
}
