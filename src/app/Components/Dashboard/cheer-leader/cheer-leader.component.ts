import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cheer-leader',
  templateUrl: './cheer-leader.component.html',
  styleUrls: ['./cheer-leader.component.css']
})
export class CheerLeaderComponent implements OnInit {
  one = new FormControl('', [Validators.required]);
  two = new FormControl('', [Validators.required]);

  constructor(private  router: Router) {
  }

  ngOnInit() {
  }

  getErrorMessage() {
    if (this.one.hasError('required')) {
      return 'You must enter an Email';
    }
    return this.one.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageTwo() {
    if (this.two.hasError('required')) {
      return 'You must enter an Email';
    }
    return this.two.hasError('email') ? 'Not a valid email' : '';
  }

  nextPage() {
    localStorage.setItem('cheerone', this.one.value);
    localStorage.setItem('cheertwo', this.two.value);
    this.router.navigate(['/dashboard/stake']);
  }
}
