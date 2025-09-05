import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table';
import { DynamicTable } from './dynamic-table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

interface TestData {
  id: number;
  name: string;
}

describe('DynamicTable', () => {
  let component: DynamicTable<TestData>;
  let fixture: ComponentFixture<DynamicTable<TestData>>;

  const headers = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' }
  ];

  const mockData: TestData[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatInputModule,
        MatFormFieldModule,
        NoopAnimationsModule,
        DynamicTable
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicTable<TestData>>(DynamicTable);
    component = fixture.componentInstance;

    component.headers = headers;
    component.data = mockData;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize displayedColumns from headers', () => {
    component.ngOnInit();
    expect(component.displayedColumns).toEqual(['id', 'name']);
  });

  it('should initialize dataSource with input data', () => {
    component.ngOnInit();
    expect(component.dataSource instanceof MatTableDataSource).toBeTrue();
    expect(component.dataSource.data).toEqual(mockData);
  });

  it('should connect paginator and sort in ngAfterViewInit when enabled', () => {
    component.ngOnInit();
    fixture.detectChanges();

    // Assign paginator & sort manually since ViewChild isn't triggered in unit tests
    component.paginator = TestBed.createComponent(MatPaginatorModule as any).componentInstance;
    component.sort = TestBed.createComponent(MatSortModule as any).componentInstance;

    component.enablePagination = true;
    component.ngAfterViewInit();

    expect(component.dataSource.paginator).toBeDefined();
    expect(component.dataSource.sort).toBeDefined();
  });

  it('should filter data when applyFilter is called', () => {
    component.ngOnInit();
    fixture.detectChanges();

    const event = { target: { value: 'bob' } } as unknown as Event;
    component.applyFilter(event);

    expect(component.dataSource.filter).toBe('bob');
  });

  it('should not set paginator if pagination is disabled', () => {
    component.ngOnInit();
    fixture.detectChanges();

    component.enablePagination = false;
    component.ngAfterViewInit();

    expect(component.dataSource.paginator).toBeUndefined();
  });
});
