import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-create-price',
  templateUrl: './create-price.component.html',
  styleUrls: ['./create-price.component.css']
})
export class CreatePriceComponent implements OnInit {
  formPrice: FormGroup;
  constructor(private fb: FormBuilder, private service: AdminService) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.formPrice = this.fb.group({
      price: ['', Validators.required],
      serviceName: ['', Validators.required],
      discount: ['', Validators.required],
    });
  }
  submitForm(price, serviceName, discount) {
  this.service.createPrice(price, serviceName, discount).subscribe((data: any) => {
    console.log(data);
  });
  }
}
