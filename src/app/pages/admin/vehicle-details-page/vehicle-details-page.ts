import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { VehicleService } from '../../../core/services/vehicle-service/vehicle-service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgStyle } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MilesPipe } from '../../../core/pipes/miles/miles-pipe';
import {
  Vehicle360Spin,
  Vehicle360SpinList,
  VehicleDetail,
  VehicleImagesList,
  VehicleVideo,
  VehicleVideoList,
} from '../../../core/models/vehicle.model';
import { VideoPlayer } from '../../../core/components/video-player/video-player';
import { ImageGallery } from "../../../core/components/image-gallery/image-gallery";
import { Spin360 } from "../../../core/components/spin-360/spin-360";

@Component({
  selector: 'app-vehicle-details-page',
  templateUrl: './vehicle-details-page.html',
  styleUrls: ['./vehicle-details-page.scss'],
  imports: [
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MilesPipe,
    NgStyle,
    VideoPlayer,
    ImageGallery,
    Spin360
],
})
export class VehicleDetailsPage implements OnInit {
  private vehicleId: number = 0;
  private readonly route = inject(ActivatedRoute);
  private readonly vehicleService = inject(VehicleService);

  public vehicleVideo: VehicleVideo | undefined;

  vehicleDetails: VehicleDetail | null | undefined;
  vehicle360Spin: Vehicle360Spin | undefined;

  vehicleImages: VehicleImagesList | undefined;

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.vehicleId = Number(params.get('vehicleId'));
          return this.vehicleService.getVehicleDetailsById(this.vehicleId);
        })
      )
      .subscribe((data) => {
        this.vehicleDetails = data;
        console.log(this.vehicleDetails);
      });
  }

  handleImageGallery() {
    this.vehicleService
      .getVehicleImages(this.vehicleId)
      .subscribe((vehicleImagesList: VehicleImagesList | undefined) => {
        if (vehicleImagesList) {
          this.vehicleImages = vehicleImagesList;
        }
      });
  }

  handleVideo() {
    this.vehicleService
      .getVehicleVideo(this.vehicleId)
      .subscribe((vehicleVideos: VehicleVideoList | null | undefined) => {
        if (vehicleVideos) {
          this.vehicleVideo = vehicleVideos[0];
        }
      });
  }

  handle360Spin() {
    this.vehicleService
      .getVehicle360Spin(this.vehicleId)
      .subscribe((vehicle360SpinList: Vehicle360SpinList | null | undefined) => {
        if (vehicle360SpinList) {
          this.vehicle360Spin = vehicle360SpinList[0];
        }
      });
  }
}
