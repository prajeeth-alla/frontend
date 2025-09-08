import { Component, Input } from '@angular/core';
import { VehicleImagesList } from '../../models/vehicle.model';
import { ImgFallback } from '../../directives/img-fallback/img-fallback';

@Component({
  selector: 'app-image-gallery',
  imports: [ImgFallback],
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.scss'
})
export class ImageGallery {
  @Input() images!: VehicleImagesList;

}
