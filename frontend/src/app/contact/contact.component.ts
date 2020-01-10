import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
private contact: any = {};
  constructor(private service: UserService) { }

  ngOnInit() {
    this.contacts();
  }
  contacts() {
    this.service.contact().subscribe((data: any) => {
  this.contact = data[0];
    });
  }
}
