import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrEditVehicleForm } from './create-or-edit-vehicle-form';

describe('CreateOrEditVehicleForm', () => {
  let component: CreateOrEditVehicleForm;
  let fixture: ComponentFixture<CreateOrEditVehicleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOrEditVehicleForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrEditVehicleForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
