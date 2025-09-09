import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserFormdataService {

  constructor() { }
  private formData: any[] = [];

  saveForm(data: any) {
    if (data.id) {
      const index = this.formData.findIndex(item => item.id === data.id);
      if (index > -1) {
        this.formData[index] = data;
      } else {
        this.formData.push(data);
      }
    } else {
      data.id = new Date().getTime();
      this.formData.push(data);
    }
  }

  getAllForms(): any[] {
    return [...this.formData];
  }

  getFormById(id: number): any {
    return this.formData.find(item => item.id === id);
  }

  deleteForm(id: number) {
    this.formData = this.formData.filter(item => item.id !== id);
  }
}
