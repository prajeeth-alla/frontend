import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormConfigService } from '../../Services/form-config.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { userZodSchema } from '../../Schema/form-config.schema';
import { z, ZodError } from 'zod';

@Component({
  selector: 'app-dynamicform',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DynamicformComponent implements OnInit {
  @Input() formConfig: any;
  @Input() editData: any;
  @Output() formSubmit = new EventEmitter<any>();

  private readonly fb = inject(FormBuilder);
  userForm!: FormGroup;
  form!: FormGroup;

  ngOnInit(): void {
    if (this.formConfig) {
      this.buildForm();
    } else {
      console.warn('formConfig is not yet loaded');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editData'] && this.editData) {
      this.patchFormWithEditData();
    }
  }

  buildForm() {
    const group: any = {};

    this.formConfig.fields.forEach((field: any) => {
      if (field.type === 'checkbox') {
        group[field.name] = this.fb.array([]);
      } else {
        group[field.name] = [null];
      }
    });

    this.userForm = this.fb.group(group);
  }

  private patchFormWithEditData() {
    if (!this.editData) return;
    const patchData = { ...this.editData };
    if (patchData.password) {
      patchData.confirmPassword = patchData.password;
    }
    this.userForm.patchValue(patchData);
    this.formConfig.fields.forEach((field: any) => {
      if (field.type === 'checkbox') {
        const formArray: FormArray = this.userForm.get(field.name) as FormArray;
        formArray.clear();
        if (this.editData[field.name]) {
          this.editData[field.name].forEach((val: string) =>
            formArray.push(this.fb.control(val))
          );
        }
      }
    });
  }
  
  onCheckboxChange(event: any, fieldName: string) {
    const formArray: FormArray = this.userForm.get(fieldName) as FormArray;
    if (event.target.checked) {
      formArray.push(this.fb.control(event.target.value));
    } else {
      const index = formArray.controls.findIndex((x) => x.value === event.target.value);
      formArray.removeAt(index);
    }
  }

  submitForm() {
    Object.keys(this.userForm.controls).forEach((key) => {
      const control = this.userForm.get(key);
      if (control?.errors?.['zod']) {
        const { zod, ...otherErrors } = control.errors!;
        control.setErrors(Object.keys(otherErrors).length ? otherErrors : null);
      }
      if (control?.invalid) {
        control.markAsTouched({ onlySelf: true });
      }
    });

    const formValue = this.userForm.value;

    try {
      userZodSchema.parse(formValue);
      delete formValue.confirmPassword;
      console.log('Zod Validation Passed:', formValue);
      if (this.editData?.id) {
        formValue.id = this.editData.id;
      }
      this.formSubmit.emit(formValue);
      this.userForm.reset();
    } catch (err: any) {
      if (err instanceof ZodError) {
        console.error('Zod Validation Errors:', err.issues);

        err.issues.forEach((e: any) => {
          const control = this.userForm.get(e.path[0]);
          if (control) {
            control.setErrors({ ...(control.errors || {}), zod: e.message });
            control.markAsTouched();
            control.updateValueAndValidity({ emitEvent: false });
          }
        });
      } else {
        console.error('Unexpected error:', err);
      }
    }
  }

  onFileChange(event: any, fieldName: string) {
    const file = event.target.files?.[0] || null;
    this.userForm.get(fieldName)?.setValue(file);
  }
}
