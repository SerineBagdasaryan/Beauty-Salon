import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  private getAdmin: any = {};

  constructor(private router: Router, private admniService: AdminService) { }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('message');
    window.location.href = '/login';
    // this.router.navigate(['login']);
  }
  ngOnInit() {
    this.getImageAdmin();
  }
getImageAdmin() {
    this.admniService.getAdminData().subscribe((data: any) => {
      this.getAdmin = data[0];
      console.log(this.getAdmin);
    });
}
}
