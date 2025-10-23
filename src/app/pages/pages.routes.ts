import {Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {QuizComponent} from './quiz/quiz.component';

export const routes: Routes = [{

  path : '',
  component:PagesComponent,
  children: [{

    path: '',
    component : HomeComponent,
    data: {breadcrumb: 'Home'}
  },{

    path: 'about',
    component : AboutComponent,
    data: {breadcrumb: 'About'}
  },{

    path: 'projects',
    component : ProjectsComponent,
    data: {breadcrumb: 'Projects'}
  },{
    path: 'home',
    component : HomeComponent,
    data: {breadcrumb: 'Home'}
  },{
    path: 'projects/quiz',
    component : QuizComponent,
    data: {breadcrumb: 'Quiz'}
  }]
}];
