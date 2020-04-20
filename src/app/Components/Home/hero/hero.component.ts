import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  selectedOption: string;

  options = [
    {name: "Lose Weight", value: 1},
    {name: "Exercise Regularly", value: 2},
    {name: "Lose Weight", value: 3},
    {name: "Quit Smoking", value: 4},
    {name: "Race", value: 5},
    {name: "Maintain Weight", value: 6},

  ]

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  push() {
    localStorage.setItem('commitment', this.selectedOption);
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/login'])
    } else {
      this.router.navigate(['/dashboard'])
    }
  }

}
