import { Component } from '@angular/core';
import {MatCard, MatCardHeader, MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatTextColumn} from '@angular/material/table';

@Component({
  selector: 'app-home',
  imports: [
    MatCardModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
