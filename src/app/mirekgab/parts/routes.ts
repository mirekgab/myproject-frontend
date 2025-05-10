import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent: () => import('./parts.component').then(m => m.PartsComponent),
    data: {
      title: 'Lista technologii'
    }
  }
];
