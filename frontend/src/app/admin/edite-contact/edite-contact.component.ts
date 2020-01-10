import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-edite-contact',
  templateUrl: './edite-contact.component.html',
  styleUrls: ['./edite-contact.component.css']
})
export class EditeContactComponent implements OnInit {
  contactForm: FormGroup;
  private contact: any = {};
  constructor(private  service: AdminService, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
   this.contactForm = this.fb.group({
     text1: ['', Validators.required],
     text2: ['', Validators.required],
     text3: ['', Validators.required],
     text4: ['', Validators.required],
     text5: ['', Validators.required],
     text6: ['', Validators.required],
     text7: ['', Validators.required],
     text8: ['', Validators.required],
     text9: ['', Validators.required],
     text10: ['', Validators.required],
     text11: ['', Validators.required],
     text12: ['', Validators.required],
     text13: ['', Validators.required],
     text14: ['', Validators.required],
     text15: ['', Validators.required],
     text16: ['', Validators.required],
     text17: ['', Validators.required],
   });
  }
  // tslint:disable-next-line:max-line-length
  updateContact(text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17) {
    // tslint:disable-next-line:max-line-length
    this.service.updateContact(text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17).subscribe((data: any) => {
      console.log(data);
    });
  }
  ngOnInit() {
    this.service.getContact().subscribe((data: any) => {
      this.contact = data[0];
    });
  }

}
