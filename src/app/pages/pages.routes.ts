import {Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from '../components/about/about.component';
import {ProjectsComponent} from '../components/projects/projects.component';

export const routes: Routes = [{

  path : '',
  component:PagesComponent,
  children: [{

    path: '',
    component : HomeComponent
  },{

    path: 'about',
    component : AboutComponent
  },{

    path: 'projects',
    component : ProjectsComponent
  },{
    path: 'home',
    redirectTo: ''
  }

  ]
}];
