import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-field',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './search-field.html',
  styleUrls: ['./search-field.scss'],
})
export class SearchField {
  @Input() placeholder: string = 'Search...';
  @Input() prefixIcon?: string;
  @Input() suffixIcon?: string;
  @Input() enableClear: boolean = true;

  @Output() searchEvent = new EventEmitter<string>();

  searchControl = new FormControl('');

  clearSearch() {
    this.searchControl.setValue('');
  }

  onSearchIconClick() {
    if (this.searchControl.value) {
      this.searchEvent.emit(this.searchControl.value.trim());
    }
  }
}
