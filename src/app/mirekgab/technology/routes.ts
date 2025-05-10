import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent: () => import('./technology.component').then(m => m.TechnologyComponent),
    data: {
      title: 'Lista technologii'
    }
  }
];
