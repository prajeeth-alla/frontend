import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, inject, input, output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatIcon } from '@angular/material/icon';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { map, shareReplay } from 'rxjs';
import { MenuService } from '../../../core/services/menu-service/menu-service';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatSidenav,
    MatIcon,
    MatNavList,
    MatListItem,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
isOpen = input<boolean>(true);
  sidebarClosed = output<void>();

  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly menuService = inject(MenuService);

  isHandset = toSignal(
    this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(result => result.matches),
      shareReplay()
    ),
    { initialValue: false }
  );

  menuItems = this.menuService.menuItems;

  sidenavMode = () => this.isHandset() ? 'over' : 'side';

  closeSidebar(): void {
    if (this.isHandset()) {
      this.sidebarClosed.emit();
    }
  }
}
