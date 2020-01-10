import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edite-service',
  templateUrl: './edite-service.component.html',
  styleUrls: ['./edite-service.component.css']
})
export class EditeServiceComponent implements OnInit {
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
      text7: ['', Validators.required],
      text8: ['', Validators.required],
      text9: ['', Validators.required],
      text10: ['', Validators.required],
  });
  }
  updateService(text1, text2, text3, text4, text5, text6, text7, text8, text9, text10) {
    this.service.updateService(text1, text2, text3, text4, text5, text6, text7, text8, text9, text10).subscribe((data: any) => {
      console.log(data);
    });
  }
  ngOnInit() {
    this.service.getservice().subscribe((data: any) => {
      this.services = data[0];
    });
  }

}
