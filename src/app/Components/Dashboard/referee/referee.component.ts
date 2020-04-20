import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.css']
})
export class RefereeComponent implements OnInit {
  referee = new FormControl('', [Validators.required]);

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  getErrorMessage() {
    if (this.referee.hasError('required')) {
      return 'You must enter a Referee Email';
    }
  }


  nextPage() {
    localStorage.setItem('referee', this.referee.value);
    this.router.navigate(['/dashboard/cheer'])
  }

}
