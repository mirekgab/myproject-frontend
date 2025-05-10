import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent: () => import('./materials.component').then(m => m.MaterialsComponent),
    data: {
      title: 'Lista technologii'
    }
  }
];
