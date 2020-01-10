import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-edite-service1',
  templateUrl: './edite-service1.component.html',
  styleUrls: ['./edite-service1.component.css']
})
export class EditeService1Component implements OnInit {
  serviceForm: FormGroup;
  services: any = {};
  constructor(private service: AdminService, private fb: FormBuilder ) {
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
    });
  }
  updateService(text1, text2, text3, text4, text5, text6) {
    this.service.updateService1(text1, text2, text3, text4, text5, text6).subscribe((data: any) => {
      console.log(data);
    });
  }
  ngOnInit() {
    this.service.getservice1().subscribe((data: any) => {
      this.services = data[0];
    });
  }

}
