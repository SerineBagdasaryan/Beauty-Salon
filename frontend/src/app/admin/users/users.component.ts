import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
private users: any = [];
show = false;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getUsers();
  }
getUsers() {
   this.adminService.getUsers().subscribe((data: any) => {
     // tslint:disable-next-line:prefer-for-of
   for (let i = 0; i < data.length; i++) {
     // tslint:disable-next-line:no-conditional-assignment
     if (data[i].role === 3 || data[i].role === 4) {
       this.show = true;
     }
     this.users = data;
   }
   console.log(data);
   });
}
}
