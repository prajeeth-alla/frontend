import { Component } from '@angular/core';
import { userFormConfig } from '../../../Config/user-form.config';
import { DynamicformComponent } from "../dynamicform.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [DynamicformComponent],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  formConfig = userFormConfig; 
  handleFormSubmit(formData: any) {
    console.log('Parent received form values:', formData);
  }
}
