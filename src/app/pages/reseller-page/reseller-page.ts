import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { DTable } from '../../core/components/d-table/d-table';
import { Vehicle } from '../../../mocks/vehicle.mock';
import { transformToDTableData } from '../../core/components/d-table/d-table.helper';
import { DTableModel } from '../../core/components/d-table/d-table.model';
import { ApiService } from '../../core/services/api-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reseller-page',
  imports: [DTable],
  templateUrl: './reseller-page.html',
  styleUrl: './reseller-page.scss',
})
export class ResellerPage implements OnInit {
  private readonly apiService = inject(ApiService);
  private readonly cdr = inject(ChangeDetectorRef);

  public vehicleTableData: DTableModel | undefined;

  ngOnInit() {
    this.loadVehicles().subscribe((data) => {
      this.vehicleTableData = transformToDTableData(data);
      this.cdr.detectChanges();
    });
  }

  loadVehicles(): Observable<Vehicle[]> {
    return this.apiService.get<Vehicle[]>('http://10.0.2.9:3000/api/vehicles');
  }
}
