import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-edite-service3',
  templateUrl: './edite-service3.component.html',
  styleUrls: ['./edite-service3.component.css']
})
export class EditeService3Component implements OnInit {

  serviceForm: FormGroup;
  services: any = {};
  constructor(private service: AdminService, private  fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.serviceForm = this.fb.group({
      text1: ['', Validators.required],
      text2: ['', Validators.required]
    });
  }
  updateService(text1, text2) {
    // tslint:disable-next-line:max-line-length
    this.service.updateService3(text1, text2).subscribe((data: any) => {
      console.log(data);
    });
  }
  ngOnInit() {
    this.service.getservice3().subscribe((data: any) => {
      this.services = data[0];
    });
  }
}
