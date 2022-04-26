import { Location } from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { DataService } from 'src/data.service';
import {PostService} from "./post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hh_front';

  logged = false;
  username = '';
  password = '';

  ngOnInit() {
    const token = localStorage.getItem('token');

    if(token){
      this.logged = true;
    }
  }

  constructor(private companyService: PostService,
              private data: DataService,
              private location: Location) {

  }

  login() {
    this.companyService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.logged = true;
      this.data.updateData(this.username);
      //this.username = '';
      this.password = '';
    });
  }

  logout() {
    this.logged = false;
    localStorage.removeItem('token');
  }

  goBack() {
    this.location.back();
  }
}
