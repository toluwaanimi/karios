import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  link = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem('token')!==null) {
      // this.router.navigate(['/dashboard'])
    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an Email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  getErrorPassword() {
    if (this.password.hasError('required')) {
      return 'You must enter your password';
    }
    return this.email.hasError('password') ? '' : 'Password is less than 8 Characters';

  }

  onSubmit() {

    this.http.post(this.link+'api/login', {
      email: this.email.value,
      password: this.password.value
    }).subscribe(
      response => {
        console.log(response)
        if (response['status'] === true) {
          localStorage.setItem('token', response['token']);
          localStorage.setItem('name', response['user']['name']);
          localStorage.setItem('email', response['user']['email']);
          localStorage.setItem('userid', response['user']['id']);
          this.router.navigate(['/dashboard']);

          // if (localStorage.getItem('email') != null) {
          //   this.http.get('http://localhost:3000/profile/' + localStorage.getItem('userid')).subscribe(
          //     profile => {
          //       console.log(profile);
          //
          //     },
          //     error => {
          //       console.log(error);
          //     }
          //   );
          // }
        } else {
        }
      }, error => {
        console.log('logged in error');
        console.log(error);
      }
    );
  }

}
