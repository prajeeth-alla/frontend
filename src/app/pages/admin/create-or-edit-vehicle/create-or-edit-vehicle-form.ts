import {
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { VehicleDetail, VehicleForm } from '../../../core/models/vehicle.model';
import { Option } from '../../../core/models/app.model';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { VehicleService } from '../../../core/services/vehicle-service/vehicle-service';
import { Helper } from '../../../core/services/helper/helper';
import { generateVehicleFormSchema } from '../../../core/zod-schemas/vehicle.schema';
import { z } from 'zod';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-or-edit-vehicle',
  templateUrl: './create-or-edit-vehicle-form.html',
  styleUrls: ['./create-or-edit-vehicle-form.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
  ],
})
export class CreateOrEditVehicleForm implements OnChanges, OnInit, OnDestroy {
  vehicleListTypes = ['New', 'Used'];
  private readonly router = inject(Router);
  private readonly cdr = inject(ChangeDetectorRef);
  private readonly fb = inject(FormBuilder);
  private readonly vehicleService = inject(VehicleService);
  private readonly helper = inject(Helper);

  @Input() initialValue?: VehicleForm | null;
  @Input() vehicleId?: number | null;

  isEditMode = false;
  rooftopsDropDownOptions: Option[] = [];
  form: FormGroup;
  private readonly schema = generateVehicleFormSchema();
  vehicleDetails: VehicleDetail | null | undefined;

  private readonly subscriptions: Subscription = new Subscription();

  constructor() {
    this.form = this.fb.group({
      rooftop_id: [null],
      make: [null, Validators.required],
      model: [null, Validators.required],
      year: [null],
      veh_listing_type: [null],
      trim: [null],
      body_type: [null],
      ext_color: [null],
      engine: [null],
      miles: [null],
      status: [null],
    });
  }

  ngOnInit() {
    // subscribe to rooftops and store subscription
    const rooftopsSub = this.vehicleService.getRooftops().subscribe((rooftops) => {
      this.rooftopsDropDownOptions = this.helper.toSelectOptions(rooftops, 'name', 'id');
      this.cdr.detectChanges();
    });
    this.subscriptions.add(rooftopsSub);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialValue']?.currentValue) {
      this.isEditMode = true;
      this.form.patchValue({ ...changes['initialValue'].currentValue });
    }
  }

  onSubmit() {
    this.clearZodErrors();

    const value = this.coerceFormValue(this.form.value);
    const result = this.schema.safeParse(value);

    if (result.success) {
      const payload: VehicleForm = result.data;
      if (this.isEditMode && this.vehicleId) {
        this.vehicleService.updateVehicleData(payload, this.vehicleId).subscribe((res) => {
          this.router.navigateByUrl('/vehicles-list');
        });
      } else {
        this.vehicleService.addNewVehicle(payload).subscribe((res) => {
          this.router.navigateByUrl('/vehicles-list');
        });
      }
    } else {
      this.applyZodErrors(result.error.issues);
    }
  }

  private coerceFormValue(raw: any): any {
    const coerced = { ...raw };

    if (coerced.rooftop_id === '' || coerced.rooftop_id === null) coerced.rooftop_id = null;
    if (typeof coerced.rooftop_id === 'string') {
      const n = Number(coerced.rooftop_id);
      coerced.rooftop_id = Number.isFinite(n) ? n : null;
    }

    if (coerced.year === '' || coerced.year === null) coerced.year = null;
    if (typeof coerced.year === 'string') {
      const n = Number(coerced.year);
      coerced.year = Number.isFinite(n) ? n : null;
    }

    return coerced;
  }

  private applyZodErrors(issues: z.ZodIssue[]) {
    issues.forEach((iss) => {
      const path = iss.path;
      if (path.length === 0) {
        const fErr = { ...(this.form.errors || {}) };
        fErr['zod'] = iss.message;
        this.form.setErrors(fErr);
        return;
      }

      const controlName = String(path[0]);
      const control = this.form.get(controlName);
      if (control) {
        const prev = { ...(control.errors || {}) };
        prev['zod'] = iss.message;
        control.setErrors(prev);
        control.markAsTouched();
      } else {
        const fErr = { ...(this.form.errors || {}) };
        fErr['zod'] = iss.message;
        this.form.setErrors(fErr);
      }
    });
  }

  private clearZodErrors() {
    Object.keys(this.form.controls).forEach((k) => {
      const c = this.form.get(k);
      if (!c) return;
      const errs = { ...(c.errors || {}) };
      if ('zod' in errs) delete errs['zod'];
      c.setErrors(Object.keys(errs).length ? errs : null);
    });

    const fErr = { ...(this.form.errors || {}) };
    if ('zod' in fErr) delete fErr['zod'];
    this.form.setErrors(Object.keys(fErr).length ? fErr : null);
  }

  ngOnDestroy(): void {
    // unsubscribe all subscriptions to prevent memory leaks
    this.subscriptions.unsubscribe();
  }
}
