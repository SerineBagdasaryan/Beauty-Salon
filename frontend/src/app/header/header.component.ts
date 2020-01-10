import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as decode from 'jwt-decode';
import {UserService} from '../user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private menu: any;
  // private show = true;
  constructor(private router: Router, private userService: UserService, private route: ActivatedRoute) {
  }
  public token: string;
  ngOnInit() {
    // console.log(this.route.snapshot, 'route');
    this.getMenu();
    addEventListener('click', (e) => {
      // @ts-ignore
      if (e.target.innerText === 'LOGOUT') {
        localStorage.removeItem('token');
        localStorage.removeItem('message');
        window.location.href = '/home';
      }
    });

  }
  getMenu() {
    // @ts-ignore
    this.userService.getMenu().subscribe((data: any) => {
      this.menu = data;
      const token = localStorage.getItem('token');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.menu.length; i++) {
        // console.log(this.menu[i].routerlink);
        if (token) {
         // tslint:disable-next-line:only-arrow-functions
         this.menu = this.menu.filter( function(item) {
           return (item.routerlink !== 'login' && item.routerlink !== 'register');
         });
       } else {
         // tslint:disable-next-line:only-arrow-functions
         this.menu = this.menu.filter( function(item) {
           return (item.routerlink !== 'myAccount' && item.routerlink !== 'logout');
         });
       }
      }

    });
  }
}
