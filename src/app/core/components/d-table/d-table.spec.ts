import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTable } from './d-table';

describe('DTable', () => {
  let component: DTable;
  let fixture: ComponentFixture<DTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
