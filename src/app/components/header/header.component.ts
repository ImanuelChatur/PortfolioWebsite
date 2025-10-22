import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatDrawer, MatDrawerContainer} from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  imports: [
    RouterLinkActive,
    RouterLink,
    MatDrawer,
    MatDrawerContainer,
    RouterOutlet
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
