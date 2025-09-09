import { Component, inject, OnInit } from '@angular/core';
import { ColorService } from '../../services/color.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgStyle } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-theme-preview',
  templateUrl: './theme-preview.html',
  styleUrls: ['./theme-preview.scss'],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    NgStyle
  ],
})
export class ThemePreview implements OnInit {
  private readonly colorService = inject(ColorService);
  themeColors: any = {};

  ngOnInit() {
    this.themeColors = this.colorService.getThemeColors();
  }

  getColorStyle(color: string, value: string) {
    return {
      'background-color': value,
      color: this.colorService.getContrastColor(color as any, 500),
    };
  }
}
