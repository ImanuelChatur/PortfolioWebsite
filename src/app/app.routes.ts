import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {ProjectsComponent} from './components/projects/projects.component';

export const routes: Routes = [
  { path: '',
    loadChildren:()=>import('./pages/pages.routes').then(p => p.routes)}
];
