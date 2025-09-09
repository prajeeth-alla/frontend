import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { catchError, EMPTY, switchMap, throwError } from 'rxjs';
import { VehicleService } from '../../../core/services/vehicle-service/vehicle-service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgStyle } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MilesPipe } from '../../../core/pipes/miles/miles-pipe';
import {
  TabItem,
  Vehicle360Spin,
  VehicleDetail,
  VehicleImagesList,
  VehicleVideo,
} from '../../../core/models/vehicle.model';
import { MatTabsModule } from '@angular/material/tabs';
import { VehiclePreviewTabs } from '../vehicle-preview-tabs/vehicle-preview-tabs';

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
    VehiclePreviewTabs,
    NgStyle,
    MatTabsModule,
    RouterLink
  ],
})
export class VehicleDetailsPage implements OnInit {
  TAB_SEQUENCE: TabItem[] = [
    {
      order: 0,
      icon: 'image',
      title: 'Images',
      identifier: 'IMAGES',
    },
    {
      order: 1,
      icon: 'play_circle',
      title: 'Videos',
      identifier: 'VIDEOS',
    },
    {
      order: 2,
      icon: '360',
      title: '360 Spin',
      identifier: 'SPIN_360',
    },
  ];
  vehicleId: number = 0;
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
        }),
        catchError(err => {
          this.vehicleDetails = null;
          return EMPTY
        })
      )
      .subscribe((data) => {
        this.vehicleDetails = data;
        this.cdr.detectChanges();
      });
  }
}
