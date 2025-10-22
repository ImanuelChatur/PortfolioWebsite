import { Component } from '@angular/core';
import {MatGridList, MatGridTile, MatGridTileText} from '@angular/material/grid-list';
import {MatAnchor, MatButton} from '@angular/material/button';
import {AsyncPipe} from '@angular/common';
import {MatButtonToggle} from '@angular/material/button-toggle';

@Component({
  selector: 'app-about',
  imports: [
    MatGridList,
    MatGridTile,
    MatGridTileText,
    MatButton,
    MatAnchor,
    AsyncPipe,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  col$: any;

}
