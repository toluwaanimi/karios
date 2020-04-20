import {Component, OnInit} from '@angular/core';
import {AngularRaveModule} from 'angular-rave';
import {PaymentInstance} from 'angular-rave';
import {FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-stake',
  templateUrl: './add-stake.component.html',
  styleUrls: ['./add-stake.component.css']
})
export class AddStakeComponent implements OnInit {
  selectedOption: string;
  showDiv = {
    previous: false,
    current: false,
    next: false
  }
  options = [
    {name: "Charity", value: 1},
    {name: "Covid 19", value: 2},
    {name: "Organization", value: 3},
    {name: "Orphange", value: 4},
    {name: "Start Ups", value: 5},
    {name: "Education", value: 6}
  ]
  link = "http://127.0.0.1:8000/";
  paymentInstance: PaymentInstance;
  token: string
  stake = new FormControl('0');
  email;

  constructor(private http : HttpClient,private  router: Router) {
  }


  paymentFailure() {
    console.log('Payment Failed');
  }

  paymentSuccess(res) {
    console.log('Payment complete', res);
    this.paymentInstance.close();
    localStorage.setItem('stake', this.stake.value);
    localStorage.setItem('organization', this.selectedOption);
    this.onSubmit();
  }
  onSubmitted() {

    this.http.post(this.link+'api/commitment', {
      commitment: localStorage.getItem('commitment'),
      start: localStorage.getItem('start'),
      end : localStorage.getItem('end'),
      referee : localStorage.getItem('referee'),
      cheerleader : localStorage.getItem('cheerone'),
      useremail : localStorage.getItem('email'),
      stake : "0",
      donated : "null"
    }).subscribe(
      response => {
        if (response['status'] === true) {
          this.router.navigate(['/dashboard']);
        } else {

        }
      }, error => {
        console.log('logged in error');
        console.log(error);
      }
    );
  }
  onSubmit() {

    this.http.post(this.link+'api/commitment', {
      commitment: localStorage.getItem('commitment'),
      start: localStorage.getItem('start'),
      end : localStorage.getItem('end'),
      referee : localStorage.getItem('referee'),
      cheerleader : localStorage.getItem('cheerone'),
      useremail : localStorage.getItem('id'),
      stake : localStorage.getItem('stake'),
      donated : localStorage.getItem('organization')
    }).subscribe(
      response => {
        if (response['status'] === true) {
          this.router.navigate(['/dashboard']);
        } else {

        }
      }, error => {
        console.log('logged in error');
        console.log(error);
      }
    );
  }

  paymentInit(paymentInstance) {
    this.paymentFailure = paymentInstance;
    console.log('Payment about to begin', paymentInstance);
  }

  ngOnInit() {
    this.email = localStorage.getItem('email');
  }

}
