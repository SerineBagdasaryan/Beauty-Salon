import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edite-price',
  templateUrl: './edite-price.component.html',
  styleUrls: ['./edite-price.component.css']
})
export class EditePriceComponent implements OnInit {
  private prices: any = {};
  priceForm: FormGroup;
  constructor(private service: AdminService, private fb: FormBuilder, private route: ActivatedRoute) {
    this.createForm();
  }
createForm() {
    this.priceForm = this.fb.group({
      price: ['', Validators.required],
      serviceName: ['', Validators.required],
      description: ['', Validators.required],
      discount: ['', Validators.required],

    });
}
  updatePrice(price, serviceName, description, discount) {
    this.route.params.subscribe(params => {
      this.service.updateprice(price, serviceName, description, discount, params.id).subscribe((data: any) => {
        console.log(data);
      });
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
    this.service.editePrice(params.id).subscribe((data: any) => {
      this.prices = data[0];
      console.log(this.prices);
    });
    });
  }

}
