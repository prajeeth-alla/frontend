import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spin360 } from './spin-360';

describe('Spin360', () => {
  let component: Spin360;
  let fixture: ComponentFixture<Spin360>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spin360]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Spin360);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
