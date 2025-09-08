import { Component } from '@angular/core';
import { CreateOrEditVehicleForm } from "../create-or-edit-vehicle/create-or-edit-vehicle-form";

@Component({
  selector: 'app-add-vehicle',
  imports: [CreateOrEditVehicleForm],
  templateUrl: './add-vehicle.html',
  styleUrl: './add-vehicle.scss'
})
export class AddVehicle {

}
