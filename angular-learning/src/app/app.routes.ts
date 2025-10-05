import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/learning-dashboard/learning-dashboard.component').then((m) => m.LearningDashboardComponent),
  },
  { path: '**', redirectTo: '' },
]
