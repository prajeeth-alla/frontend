import { AfterViewInit, Component, effect, inject, OnInit, ViewChild } from '@angular/core';
import { VehicleService } from '../../../core/services/vehicle-service/vehicle-service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SearchField } from '../../../core/components/search-field/search-field';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { SelectField } from '../../../core/components/select-field/select-field';
import { Option } from '../../../core/models/app.model';
import { Helper } from '../../../core/services/helper/helper';
import { Router } from '@angular/router';
import { Vehicle } from '../../../core/models/vehicle.model';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vehicles-page',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    SearchField,
    SelectField,
    MatSort,
    MatSortModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './vehicles-page.html',
  styleUrl: './vehicles-page.scss',
})
export class VehiclesPage implements OnInit, AfterViewInit {
  private readonly router = inject(Router);
  private readonly vehicleService = inject(VehicleService);
  private readonly helper = inject(Helper);
  filterValues = {
    search: '',
    resellerId: null as number | null,
  };

  displayedColumns: string[] = [
    'id',
    'make',
    'model',
    'year',
    'veh_listing_type',
    'trim',
    'body_type',
    'actions',
  ];

  rooftopsDropDownOptions: Option[] = [];

  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  private readonly _snackBar = inject(MatSnackBar);

  constructor() {
    effect(() => {
      this.dataSource.data = this.vehicleService.vehicles$();
    });

    effect(() => {
      const rooftops = this.vehicleService.rooftops$();
      this.rooftopsDropDownOptions = this.helper.toSelectOptions(rooftops, 'name', 'id');
    });
  }

  handleSearch(searchText: any) {
    this.filterValues.search = searchText;
    this.applyFilter();
  }

  filterByRooftop(resellerId: number | null) {
    this.filterValues.resellerId = resellerId;
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = JSON.stringify(this.filterValues);
  }

  viewMore(el: Vehicle) {
    this.router.navigateByUrl(`vehicles-details/${el.id}`);
  }

  ngOnInit(): void {
    this.loadAllVehicles();
    this.vehicleService.getRooftops().subscribe();
  }

  loadAllVehicles() {
    this.vehicleService.getAllVehicles().subscribe();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate = (data: any, filter: string): boolean => {
      const { search, resellerId } = JSON.parse(filter);

      // ✅ Reseller filter
      const resellerMatch = !resellerId || data.rooftop_id === resellerId;

      // ✅ Search filter (check across multiple fields)
      const searchText = search.trim().toLowerCase();
      const searchMatch =
        !searchText ||
        Object.values(data).some((val) => String(val).toLowerCase().includes(searchText));

      return resellerMatch && searchMatch;
    };
  }

  addVehicle() {
    this.router.navigateByUrl('/add-vehicle');
  }

  editVehicle(el: Vehicle) {
    this.router.navigateByUrl(`/edit-vehicle/${el.id}`);
  }

  deleteVehicle(el: Vehicle) {
    this.vehicleService.deleteVehicleData(el.id).subscribe((res) => {
      this._snackBar.open('Vehicle Deleted Successfully');
      this.loadAllVehicles();
    });
  }
}
