import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { debounceTime } from 'rxjs/operators';

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
export class SearchField implements OnInit {
  @Input() placeholder: string = 'Search...';
  @Input() debounceTime = 300;

  @Input() prefixIcon?: string;
  @Input() suffixIcon: string = 'search';
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
    console.log(this.searchControl.value);
    
    this.iconClick.emit(type);
  }
}
