import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
private price: any = {};
private prices: any = {};
private prices3: any = {};
  constructor(private service: UserService) { }

  ngOnInit() {
    this. priceData();
    this.priceEs();
    this.pricesData();
  }
  priceData() {
    this.service.priceData().subscribe((data: any) => {
      this.price = data[0];
    });
  }
  priceEs() {
    this.service.prices().subscribe((data: any) => {
      this.prices = data[0];
    });
  }
  pricesData() {
    this.service.pricesData().subscribe((data: any) => {
      this.prices3 = data[0];
    });
  }
}
