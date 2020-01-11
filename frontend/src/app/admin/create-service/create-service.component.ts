import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
serviceForm: FormGroup;
  constructor(private service: AdminService, private fb: FormBuilder) {
    this.createForm();
  }
createForm() {
    this.serviceForm = this.fb.group({
      title: ['', Validators.required],
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
    formData.append('title', this.serviceForm.get('title').value);
    formData.append('description', this.serviceForm.get('description').value);
    formData.append('file', this.serviceForm.get('image').value);
    this.service.createService(formData).subscribe((data: any) => {
      console.log(data);
    });
  }
  ngOnInit() {
  }

}
