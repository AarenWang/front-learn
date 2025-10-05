import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'lessons/:lessonId',
    loadComponent: () => import('./pages/lesson-detail/lesson-detail.component').then((m) => m.LessonDetailComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
]
