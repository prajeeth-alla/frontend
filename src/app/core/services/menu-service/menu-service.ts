import { Injectable, signal } from '@angular/core';
import { SideMenuItem } from '../../models/side-menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly menuItemsSignal = signal<SideMenuItem[]>([]);
  menuItems = this.menuItemsSignal.asReadonly();

  constructor() {
    this.initializeMenu();
  }

  private initializeMenu(): void {
    const items: SideMenuItem[] = [
      { label: 'Resellers', routerLink: '/resellers', icon: 'people' },
      { label: 'Vehicles', routerLink: '/vehicles', icon: 'directions_car' },
    ];
    this.menuItemsSignal.set(items);
  }

  updateMenuItems(items: SideMenuItem[]): void {
    this.menuItemsSignal.set(items);
  }

  addMenuItem(item: SideMenuItem): void {
    this.menuItemsSignal.update(currentItems => [...currentItems, item]);
  }
}
