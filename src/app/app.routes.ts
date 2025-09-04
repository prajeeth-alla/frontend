import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/reseller-page/reseller-page').then((c) => c.ResellerPage),
  },

  {
    path: 'user-form',
    loadComponent: () => import('./Components/dynamicform/user-form/user-form.component').then((c) => c.UserFormComponent),
  },
  {
    path: 'vehicle-form',
    loadComponent: () => import('./Components/dynamicform/vehicle-form/vehicle-form').then((c) => c.VehicleForm),
  },
];
