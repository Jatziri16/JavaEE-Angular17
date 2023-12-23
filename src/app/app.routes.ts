import { Routes } from '@angular/router';
import { VideojuegosComponent } from './components/videojuegos/videojuegos.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'videojuegos'
    },
    {
        path: 'videojuegos',
        component: VideojuegosComponent
    },
    {
        path: '**',
        redirectTo: 'videojuegos'
    },
];
