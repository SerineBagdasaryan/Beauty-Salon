import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
private price: any = [];
  constructor(private service: UserService) { }

  ngOnInit() {
    this. priceData();
  }
  priceData() {
    this.service.priceData().subscribe((data: any) => {
      this.price = data;
    });
  }
}
