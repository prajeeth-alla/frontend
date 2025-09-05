import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { DynamicTable } from '../../../core/components/dynamic-table/dynamic-table';
import { transformToDynamicTableData } from '../../../core/components/dynamic-table/dynamic-table.helper';
import { DynamicTableModel } from '../../../core/components/dynamic-table/dynamic-table.model';
import { ApiService } from '../../../core/services/api-service/api-service';
import { Observable } from 'rxjs';
import { Vehicle } from '../../../core/models/vehicle.model';

@Component({
  selector: 'app-reseller-page',
  imports: [DynamicTable],
  templateUrl: './reseller-page.html',
  styleUrl: './reseller-page.scss',
})
export class ResellerPage implements OnInit {
  private readonly apiService = inject(ApiService);
  private readonly cdr = inject(ChangeDetectorRef);

  public vehicleTableData: DynamicTableModel | undefined;

  ngOnInit() {
    this.loadVehicles().subscribe((data) => {
      this.vehicleTableData = transformToDynamicTableData(data);
      this.cdr.detectChanges();
    });
  }

  loadVehicles(): Observable<Vehicle[]> {
    return this.apiService.get<Vehicle[]>('https://qf.ev5.ai/nodejs/vehicles_updated.json');
  }
}
