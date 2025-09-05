import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LayoutModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}
