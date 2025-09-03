import { Routes } from '@angular/router';
import { DynamicformComponent } from './Components/dynamicform/dynamicform.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/reseller-page/reseller-page').then(c => c.ResellerPage),
    },

    {
        path: 'form',
        component: DynamicformComponent
    },
];
