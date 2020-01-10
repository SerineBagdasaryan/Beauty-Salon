import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-edite-service2',
  templateUrl: './edite-service2.component.html',
  styleUrls: ['./edite-service2.component.css']
})
export class EditeService2Component implements OnInit {
  serviceForm: FormGroup;
  services: any = {};
  constructor(private service: AdminService, private  fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.serviceForm = this.fb.group({
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
    });
  }
  updateService(text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14) {
    // tslint:disable-next-line:max-line-length
    this.service.updateService2(text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14).subscribe((data: any) => {
      console.log(data);
    });
  }
  ngOnInit() {
    this.service.getservice2().subscribe((data: any) => {
      this.services = data[0];
    });
  }

}
