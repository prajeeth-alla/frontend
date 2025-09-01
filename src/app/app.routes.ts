import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/reseller-page/reseller-page').then(c => c.ResellerPage),
    }
];
