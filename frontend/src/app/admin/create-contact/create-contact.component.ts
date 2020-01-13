import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
formContact: FormGroup
  constructor(private service: AdminService, private fb: FormBuilder) {
  this.createForm();
  }

  ngOnInit() {
  }
createForm() {
  this.formContact = this.fb.group({
    address: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    customerSupport: ['', Validators.required],
  });
}
  submitForm(address, phone, email, customerSupport) {
this.service.createContactData(address, phone, email, customerSupport).subscribe((data: any) => {
  console.log(data);
});

  }

}
