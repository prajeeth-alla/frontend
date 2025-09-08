import { Component, inject, Input, OnInit } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { Vehicle360Spin } from '../../models/vehicle.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-spin-360',
  imports: [CdkTableModule],
  templateUrl: './spin-360.html',
  styleUrl: './spin-360.scss',
})
export class Spin360 implements OnInit{
  // https://media.flickfusion.net/p/360?video_fk=500B46A5-E64F-0B13-E892-D1A6F69C5EC9
  safeUrl: SafeResourceUrl | undefined;
  private readonly sanitizer = inject(DomSanitizer);
  @Input() spin360Data!: Vehicle360Spin;
  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.spin360Data.playerUrl);
  }
}
