import {Component, OnInit} from '@angular/core';
import {Router, RouterEvent, NavigationEnd, NavigationStart} from '@angular/router';
import {UserService} from './user.service';
import * as decode from 'jwt-decode';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  show = true;

  constructor(private router: Router, private userService: UserService) {
    this.router.events.subscribe(event => {
      // tslint:disable-next-line:max-line-length
      if (event instanceof NavigationEnd && event.url === '/admin') {
        this.show = false;
        // console.log('Navigation Start', NavigationStart);
      }

      // @ts-ignore
      if (event instanceof NavigationEnd) {
        // console.log('Navigation End', event.url);
      }
    });
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    // tslint:disable-next-line:prefer-for-of
    if (token) {
      const tokenPayload = decode(token);
      // console.log(tokenPayload);
      const expiryDate = new Date(tokenPayload.exp * 1000);
      // @ts-ignore
      if (token && expiryDate && (Date.now() > expiryDate)) {
        localStorage.removeItem('token');
        localStorage.removeItem('message');
        // tslint:disable-next-line:only-arrow-functions
      }
    }
    if (this.userService.isAuthAdmin()) {
      this.router.navigate(['admin']);
    } else {
      this.router.navigate(['home']);
    }
  }
}

