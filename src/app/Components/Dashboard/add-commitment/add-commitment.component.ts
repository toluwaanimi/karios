import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

export class Query {
  from: Date
  to: Date
}

@Component({
  selector: 'app-add-commitment',
  templateUrl: './add-commitment.component.html',
  styleUrls: ['./add-commitment.component.css']
})
export class AddCommitmentComponent implements OnInit {
  // start = new FormControl('', Validators.required);
  end;
  start;
  string: String;

  query = new Query();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  subStrAfterChars(str, char, pos) {
    this.string = str.toString();
    if (pos == 'b')
      return this.string.substring(this.string.indexOf(char) + 1);
    else if (pos == 'a')
      return this.string.substring(0, this.string.indexOf(char));
    else
      return str;
  }

  nextPage() {
    this.start = this.subStrAfterChars(this.query.from, 'GMT', 'a');
    this.end = this.subStrAfterChars(this.query.to, 'GMT', 'a');
    localStorage.setItem('start', this.start);
    localStorage.setItem('end', this.end);
    this.router.navigate(['/dashboard/referee'])
  }

  updateFromDate(source) {
    this.query.from = source.target.valueAsDate;
    this.start = this.subStrAfterChars(this.query.from, 'GMT', 'a');
  }

  updateToDate(source) {

    this.query.to = source.target.valueAsDate;
    this.end = this.subStrAfterChars(this.query.to, 'GMT', 'a');

  }

}
