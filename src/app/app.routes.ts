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
        redirectTo:'vehicles',
        pathMatch: 'full'
      },
      {
        path: 'resellers',
        loadComponent: () =>
          import('./pages/admin/reseller-page/reseller-page').then((c) => c.ResellerPage),
      },
      {
        path: 'vehicles',
        loadComponent: () =>
          import('./pages/admin/vehicles-page/vehicles-page').then((c) => c.VehiclesPage),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
