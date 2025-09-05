import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-dynamic-table',
  imports: [
    MatPaginatorModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
  ],
  templateUrl: './dynamic-table.html',
  styleUrl: './dynamic-table.scss',
})
export class DynamicTable<T> implements OnInit, AfterViewInit {
  @Input() headers: { key: string; label: string }[] = [];
  @Input() data: T[] = [];

  @Input() enablePagination = true;

  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<T>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.displayedColumns = this.headers.map((h) => h.key);
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    if (this.enablePagination && this.paginator) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
