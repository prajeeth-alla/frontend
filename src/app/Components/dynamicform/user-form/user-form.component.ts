import { Component, inject, OnInit } from '@angular/core';
import { userFormConfig } from '../../../Config/user-form.config';
import { DynamicformComponent } from '../dynamicform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormConfigService } from '../../../Services/form-config.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [DynamicformComponent,CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent implements OnInit {
  formConfig: any;
  private readonly configService = inject(FormConfigService);

  ngOnInit(): void {
    this.configService.getUserFormConfig().subscribe((config: any) => {
      this.formConfig = config;
    });
  }

  handleFormSubmit(formData: any) {
    console.log('Parent received form values:', formData);
  }
}
