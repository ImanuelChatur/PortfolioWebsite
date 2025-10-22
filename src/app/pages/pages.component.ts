import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../components/header/header.component';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatMiniFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-pages',
  imports: [
    RouterOutlet,
    HeaderComponent,
    MatSidenavContainer,
    MatSidenav,
    MatToolbar,
    MatMiniFabButton,
    MatIcon,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
