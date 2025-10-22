import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {QuizComponent} from './pages/quiz/quiz.component';
import {ProjectsComponent} from './pages/projects/projects.component';

export const routes: Routes = [
  { path: '',
    loadChildren:()=>import('./pages/pages.routes').then(p => p.routes)}
];
