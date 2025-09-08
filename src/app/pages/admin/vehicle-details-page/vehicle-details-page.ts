import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
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
  private readonly cdr = inject(ChangeDetectorRef);

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
        this.cdr.detectChanges();
      });
  }

  handleImageGallery() {
    this.vehicleService
      .getVehicleImages(this.vehicleId)
      .subscribe((vehicleImagesList: VehicleImagesList | undefined) => {
        if (vehicleImagesList) {
          this.vehicleImages = vehicleImagesList;
          this.cdr.detectChanges();
        }
      });
  }

  handleVideo() {
    this.vehicleService
      .getVehicleVideo(this.vehicleId)
      .subscribe((vehicleVideos: VehicleVideoList | null | undefined) => {
        if (vehicleVideos) {
          vehicleVideos[0].clipUrl = "https://videos.pexels.com/video-files/14052141/14052141-hd_1920_1080_25fps.mp4"
          this.vehicleVideo = vehicleVideos[0];
          this.cdr.detectChanges();
        }
      });
  }

  handle360Spin() {
    this.vehicleService
      .getVehicle360Spin(this.vehicleId)
      .subscribe((vehicle360SpinList: Vehicle360SpinList | null | undefined) => {
        if (vehicle360SpinList) {
          vehicle360SpinList[0].playerUrl = "https://media.flickfusion.net/p/360?video_fk=500B46A5-E64F-0B13-E892-D1A6F69C5EC9";
          this.vehicle360Spin = vehicle360SpinList[0];
          this.cdr.detectChanges();
        }
      });
  }
}
