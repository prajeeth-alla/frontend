import { Component, Input } from '@angular/core';
import { VehicleImagesList } from '../../models/vehicle.model';

@Component({
  selector: 'app-image-gallery',
  imports: [],
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.scss'
})
export class ImageGallery {
  @Input() images!: VehicleImagesList;

}
