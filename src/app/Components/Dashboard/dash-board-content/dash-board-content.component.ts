import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dash-board-content',
  templateUrl: './dash-board-content.component.html',
  styleUrls: ['./dash-board-content.component.css']
})
export class DashBoardContentComponent implements OnInit {
  link = "http://127.0.0.1:8000/";
  commitments;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.http.get(this.link + 'api/commitment/' + localStorage.getItem('email')).subscribe(
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

  onPush(id) {
    localStorage.setItem('single', id);
    this.router.navigate(['dashboard/view'])
    console.log(id)
  }

}
