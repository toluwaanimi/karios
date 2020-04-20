import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  link = "http://127.0.0.1:8000/";
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  number = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirm = new FormControl('', [Validators.required, Validators.minLength(8)]);

  url : any = '';
  constructor(private http: HttpClient, private router: Router) {
  }
  ngOnInit() {
    if (localStorage.getItem('token')!==null) {
      this.router.navigate(['/dashboard'])
    }
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (event) => { //
        // called once readAsDataURL is completed
        this.url = (event.target as FileReader).result;

      }
      reader.readAsDataURL(event.target.files[0]); // read file as data url

    }
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter an Email';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorName() {
    if (this.name.hasError('required')) {
      return 'You must enter your name';
    }
  }


  getErrorPassword() {
    if (this.password.hasError('required')) {
      return 'You must enter your password';
    }
    return this.email.hasError('password') ? '' : 'Password is less than 8 Characters';

  }
  getEqual(){
    if (!(this.password.value.toString().equals(this.confirm.value.toString()))){
      return 'Password doesnt match';
    }
  }
  onRegister() {
    this.http.post(this.link+'api/register', {
      email: this.email.value,
      name: this.name.value,
      number : this.number.value,
      password: this.password.value
    }).subscribe(
      response => {
        if (response['status'] === true) {
          this.router.navigate(['/login']);
        } else {
          console.log(response);
        }
      }, error => {
        console.log(error);
      }
    );
  }
}
