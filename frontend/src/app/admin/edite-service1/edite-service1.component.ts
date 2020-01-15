import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../admin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edite-service1',
  templateUrl: './edite-service1.component.html',
  styleUrls: ['./edite-service1.component.css']
})
export class EditeService1Component implements OnInit {
  serviceForm: FormGroup;
  services: any = {};
  constructor(private service: AdminService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.createForm();
  }
  createForm() {
    this.serviceForm = this.fb.group({
      description: ['', Validators.required],
      imageName: ['', Validators.required],
      image: [null],
    });
  }
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.serviceForm.patchValue({
      image: file
    });
    this.serviceForm.get('image').updateValueAndValidity();
  }
  submitForm() {
    this.route.params.subscribe(params => {
      const formData: any = new FormData();
      formData.append('description', this.serviceForm.get('description').value);
      formData.append('imageName', this.serviceForm.get('imageName').value);
      formData.append('id', params.id);
      formData.append('image', this.serviceForm.get('image').value);
      this.service.updateService1(formData).subscribe((data: any) => {
        console.log(data);
      });
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.editeService1(params.id).subscribe((res: any) => {
        this.services = res[0];
        console.log(res);
      });
    });
  }

}
