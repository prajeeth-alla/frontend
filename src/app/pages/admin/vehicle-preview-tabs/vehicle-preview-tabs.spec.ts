import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePreviewTabs } from './vehicle-preview-tabs';

describe('VehiclePreviewTabs', () => {
  let component: VehiclePreviewTabs;
  let fixture: ComponentFixture<VehiclePreviewTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiclePreviewTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclePreviewTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
