import { Component, inject, OnInit } from '@angular/core';
import { userFormConfig } from '../../../Config/user-form.config';
import { DynamicformComponent } from '../dynamicform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormConfigService } from '../../../Services/form-config.service';
import { UserFormdataService } from '../../../Services/user-formdata.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [DynamicformComponent,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent implements OnInit {
  formConfig: any;
  savedForms: any[] = [];
  editData: any = null;
  private readonly configService = inject(FormConfigService);
  private readonly dataService = inject(UserFormdataService);

  ngOnInit(): void {
    this.configService.getUserFormConfig().subscribe((config: any) => {
      this.formConfig = config;
    });
    this.savedForms = this.dataService.getAllForms();
  }

  handleFormSubmit(formData: any) {
    this.dataService.saveForm(formData);
    this.savedForms = this.dataService.getAllForms();
    this.editData = null;
    console.log('Parent received form values:', formData);
  }

  editForm(id: number) {
    this.editData = this.dataService.getFormById(id);
  }

  deleteForm(id: number) {
    this.dataService.deleteForm(id);
    this.savedForms = this.dataService.getAllForms();
  }
}
