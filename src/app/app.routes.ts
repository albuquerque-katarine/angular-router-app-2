import { Routes } from '@angular/router';
import { Home } from './core/pages/home/home';
import { About } from './core/pages/about/about';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'about',
        component: About
    }
];
