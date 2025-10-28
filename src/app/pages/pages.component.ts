import {Component, inject} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../components/header/header.component';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {MatMiniFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {Title} from '@angular/platform-browser';
import {filter} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {NgIf} from '@angular/common';
import {MatLabel} from '@angular/material/input';

@Component({
  selector: 'app-pages',
  imports: [
    RouterOutlet,
    MatSidenavContainer,
    MatSidenav,
    MatToolbar,
    MatMiniFabButton,
    MatIcon,
    RouterLink,
    RouterLinkActive,
    NgIf,
    MatLabel,
  ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
//Handles pages, navigation etc.
export class PagesComponent {
  //Declare variables
  breadcrumb = ""; //breadcrumb of page data
  isMobile = false;

  //Calls title and the route to get variables based off page
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private title: Title,
    private breakpointObserver: BreakpointObserver,
  ) {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() =>{
        const child =this.getChild(route);
        child.data.subscribe((data) => {
          this.breadcrumb = data['breadcrumb'] || "Home";
          this.title.setTitle(this.breadcrumb);
        })
    });

    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(res =>{
        this.isMobile = res.matches;
        console.log(this.isMobile);
      })
  }

  /**
   * Recursive function to get nested child of active route
   * e.g. Pages component > child component > child's child component
   * Returns its activated route
   **/
  getChild(route: ActivatedRoute): ActivatedRoute {
    if (route.firstChild){
      return this.getChild(route.firstChild);
    }
    return route;
  }


}
