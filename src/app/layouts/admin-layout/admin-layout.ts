import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BreadcrumbComponent } from '../../core/components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-admin-layout',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    Header,
    Sidebar,
    BreadcrumbComponent
  ],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.scss',
})
export class AdminLayout implements OnInit {
  private readonly breakpointObserver = inject(BreakpointObserver);
  drawerMode: 'over' | 'side' | 'push' = 'side';
  sidebarOpened = true;

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe((result) => {
        if (result.matches) {
          this.drawerMode = 'over'; // overlay drawer on small devices
          this.sidebarOpened = false;
        } else {
          this.drawerMode = 'side'; // permanent drawer on desktop
          this.sidebarOpened = true;
        }
      });
  }

  toggleSidebar() {
    this.sidebarOpened = !this.sidebarOpened;
  }

  closeSidebar() {
    if (this.drawerMode === 'over') {
      this.sidebarOpened = false;
    }
  }

  isSidebarOpen() {
    return this.sidebarOpened;
  }
}
