import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-field',
  imports: [MatFormField, MatLabel, MatIcon, MatInput, ReactiveFormsModule],
  templateUrl: './search-field.html',
  styleUrls: ['./search-field.scss'],
})
export class SearchField implements OnInit {
  @Input() placeholder: string = 'Search...';
  @Input() debounceTime = 300;

  @Input() prefixIcon?: string; // Material icon name e.g. 'search'
  @Input() suffixIcon?: string; // Material icon name e.g. 'tune'
  @Input() enableClear: boolean = true;

  @Output() search = new EventEmitter<string>();
  @Output() iconClick = new EventEmitter<'prefix' | 'suffix'>();

  searchControl = new FormControl('');

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(this.debounceTime))
      .subscribe((value) => this.search.emit((value ?? '').trim()));
  }

  clearSearch() {
    this.searchControl.setValue('');
  }

  onIconClick(type: 'prefix' | 'suffix') {
    this.iconClick.emit(type);
  }
}
