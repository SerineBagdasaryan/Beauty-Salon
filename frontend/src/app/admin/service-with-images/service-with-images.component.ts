import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-service-with-images',
  templateUrl: './service-with-images.component.html',
  styleUrls: ['./service-with-images.component.css']
})
export class ServiceWithImagesComponent implements OnInit {

  serviceForm: FormGroup;
  constructor(private service: AdminService, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.serviceForm = this.fb.group({
      description: ['', Validators.required],
      image: [ null],
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
    const formData: any = new FormData();
    formData.append('description', this.serviceForm.get('description').value);
    formData.append('file', this.serviceForm.get('image').value);
    this.service.createServiceWithImages(formData).subscribe((data: any) => {
      console.log(data);
    });
  }
  ngOnInit() {
  }

}
