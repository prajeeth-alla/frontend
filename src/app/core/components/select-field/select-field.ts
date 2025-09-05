import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-select-field',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './select-field.html',
  styleUrl: './select-field.scss',
})
export class SelectField {
  @Input() label: string = 'Select';
  @Input() placeholder: string = 'Choose option';
  @Input() options: { value: any; label: string }[] = [];
  @Input() enableClear: boolean = false;

  @Input() control = new FormControl(); // external or internal

  @Output() selectionChange = new EventEmitter<any>();

  onSelectionChange(value: any) {
    this.selectionChange.emit(value);
  }

  clearSelection() {
    this.control.setValue(null);
    this.selectionChange.emit(null);
  }
}
