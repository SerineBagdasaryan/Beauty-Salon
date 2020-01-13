import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-get-contact',
  templateUrl: './get-contact.component.html',
  styleUrls: ['./get-contact.component.css']
})
export class GetContactComponent implements OnInit {
  private contact: any = [];

  constructor(private service: AdminService, private router: Router) { }

  ngOnInit() {
    this.getContacts();
  }
  getContacts() {
    this.service.getContact().subscribe((data: any) => {
      this.contact = data;
    });
  }
  deleteContact(id) {
    this.service.deleteContactPage(id).subscribe((data: any) => {
      this.service.getContact().subscribe((res: any) => {
        this.contact = res;
      })
      console.log(data);
    });
  }
}
