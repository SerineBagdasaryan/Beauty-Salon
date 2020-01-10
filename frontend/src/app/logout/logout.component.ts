import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: UserService) { }
  ngOnInit() {
    // localStorage.removeItem('token');
    // this.router.navigate(['home']);
    // window.location.href = '/home';
  }

}
