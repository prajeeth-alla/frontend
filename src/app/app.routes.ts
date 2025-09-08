import { Routes } from '@angular/router';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { AdminLayout } from './layouts/admin-layout/admin-layout';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/auth/login-page/login-page').then((c) => c.LoginPage),
        data: { breadcrumb: 'Login' },
      },
    ],
  },
  {
    path: '',
    component: AdminLayout,
    // canActivate: [adminGuard],
    children: [
      {
        path: '',
        redirectTo: 'vehicles-list',
        pathMatch: 'full',
        data: { breadcrumb: 'Home' },
      },
      {
        path: 'resellers',
        loadComponent: () =>
          import('./pages/admin/reseller-page/reseller-page').then((c) => c.ResellerPage),
        data: { breadcrumb: 'Resellers' },
      },
      {
        path: 'vehicles-list',
        loadComponent: () =>
          import('./pages/admin/vehicles-page/vehicles-page').then((c) => c.VehiclesPage),
        data: { breadcrumb: 'Vehicles' },
      },
      {
        path: 'vehicles-details/:vehicleId',
        loadComponent: () =>
          import('./pages/admin/vehicle-details-page/vehicle-details-page').then(
            (c) => c.VehicleDetailsPage
          ),
        data: { breadcrumb: 'Vehicle Details' },
      },
      {
        path: 'add-vehicle',
        loadComponent: () =>
          import('./pages/admin/add-vehicle/add-vehicle').then((c) => c.AddVehicle),
        data: { breadcrumb: 'AddVehicle' },
      },
      {
        path: 'edit-vehicle/:vehicleId',
        loadComponent: () =>
          import('./pages/admin/edit-vehicle/edit-vehicle').then((c) => c.EditVehicle),
        data: { breadcrumb: 'EditVehicle' },
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
