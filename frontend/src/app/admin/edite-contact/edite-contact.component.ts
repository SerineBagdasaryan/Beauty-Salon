import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../admin.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edite-contact',
  templateUrl: './edite-contact.component.html',
  styleUrls: ['./edite-contact.component.css']
})
export class EditeContactComponent implements OnInit {
  contactForm: FormGroup;
  private contact: any = {};
  constructor(private  service: AdminService, private fb: FormBuilder, private  route: ActivatedRoute) {
    this.createForm();
  }
  createForm() {
   this.contactForm = this.fb.group({
     address: ['', Validators.required],
     phone: ['', Validators.required],
     email: ['', Validators.required],
     customerSupport: ['', Validators.required],

   });
  }
  // tslint:disable-next-line:max-line-length
  updateContact(address, phone, email, customerSupport) {
    this.route.params.subscribe(param => {
      // tslint:disable-next-line:max-line-length
    this.service.updateContact(address, phone, email, customerSupport, param.id).subscribe((data: any) => {
      console.log(data);
    });
    });
  }
  ngOnInit() {
    this.route.params.subscribe(param => {
      this.service.editeContact(param.id).subscribe((data: any) => {
        this.contact = data[0];
      });
    });

  }

}
