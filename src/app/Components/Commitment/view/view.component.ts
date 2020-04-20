import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  link = "http://127.0.0.1:8000/";
    commitments;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.link + 'api/commitment/one/' + localStorage.getItem('single')).subscribe(
      response => {
        if (response['status'] === false) {
          console.log(response['message'])
        } else {
          this.commitments = response['data'];
        }
      }, error => {
        console.log('logged in error');
        console.log(error);
      }
    );
  }

}
