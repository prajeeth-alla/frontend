import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import {
  VehicleImagesList,
  VehicleVideoList,
  Vehicle360SpinList,
  TabItem,
} from '../../../core/models/vehicle.model';
import { VehicleService } from '../../../core/services/vehicle-service/vehicle-service';
import { VideoPlayer } from '../../../core/components/video-player/video-player';
import { ImageGallery } from '../../../core/components/image-gallery/image-gallery';
import { Spin360 } from '../../../core/components/spin-360/spin-360';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-vehicle-preview-tabs',
  imports: [MatTabsModule, MatIconModule, VideoPlayer, ImageGallery, Spin360],
  templateUrl: './vehicle-preview-tabs.html',
  styleUrl: './vehicle-preview-tabs.scss',
})
export class VehiclePreviewTabs implements OnInit {
  @Input() tabSequence!: TabItem[];
  @Input() vehicleId!: number;

  private readonly vehicleService = inject(VehicleService);
  private readonly cdr = inject(ChangeDetectorRef);
  tabContents: { [key: number]: any } = {};
  loading: { [key: number]: boolean } = {};

  ngOnInit(): void {
    this.handleTab(0);
  }

  onTabChange(event: any) {
    const index = event.index;

    // ✅ If content is already loaded, don't call API again
    if (this.tabContents[index]) {
      return;
    }

    this.loading[index] = true;
    this.handleTab(index);
  }

  handleTab(index: number) {
    const targetTab = this.tabSequence.filter((i) => i.order === index)[0];

    switch (targetTab.identifier) {
      case 'IMAGES':
        this.handleImageGallery(index);
        break;
      case 'VIDEOS':
        this.handleVideo(index);
        break;
      case 'SPIN_360':
        this.handle360Spin(index);
        break;
    }
  }

  handleImageGallery(index: number) {
    this.vehicleService
      .getVehicleImages(this.vehicleId)
      .subscribe((vehicleImagesList: VehicleImagesList | undefined) => {
        if (vehicleImagesList?.length) {
          this.tabContents[index] = vehicleImagesList;
          this.loading[index] = false;
          this.cdr.detectChanges();
        }else {
          this.loading[index] = false;
        }
      });
  }

  handleVideo(index: number) {
    this.vehicleService
      .getVehicleVideo(this.vehicleId)
      .subscribe((vehicleVideos: VehicleVideoList | null | undefined) => {
        if (vehicleVideos?.length) {
          vehicleVideos[0].clipUrl =
            'https://videos.pexels.com/video-files/14052141/14052141-hd_1920_1080_25fps.mp4';
          this.tabContents[index] = vehicleVideos[0];
          this.loading[index] = false;
          this.cdr.detectChanges();
        }else {
          this.loading[index] = false;
        }
      });
  }

  handle360Spin(index: number) {
    this.vehicleService
      .getVehicle360Spin(this.vehicleId)
      .subscribe((vehicle360SpinList: Vehicle360SpinList | null | undefined) => {
        if (vehicle360SpinList?.length) {
          vehicle360SpinList[0].playerUrl =
            'https://media.flickfusion.net/p/360?video_fk=500B46A5-E64F-0B13-E892-D1A6F69C5EC9';
          this.tabContents[index] = vehicle360SpinList[0];
          this.loading[index] = false;
          this.cdr.detectChanges();
        }else {
          this.loading[index] = false;
        }
      });
  }
}
