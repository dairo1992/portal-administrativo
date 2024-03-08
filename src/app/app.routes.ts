import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/home/home.component'),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
