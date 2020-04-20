import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dash-board-nav-bar',
  templateUrl: './dash-board-nav-bar.component.html',
  styleUrls: ['./dash-board-nav-bar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]

})
export class DashBoardNavBarComponent implements OnInit {
  public _opened: boolean = false;
  public menuState: string;
  name;

  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
  constructor() { }

  ngOnInit() {
    this.name = localStorage.getItem('name');
  }

}
