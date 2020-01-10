import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-get-price',
  templateUrl: './get-price.component.html',
  styleUrls: ['./get-price.component.css']
})
export class GetPriceComponent implements OnInit {
  private prices: any = [];

  constructor(private service: AdminService) { }

  ngOnInit() {
    this.getPrice();
  }
getPrice() {
    this.service.getPrice().subscribe((data: any) => {
      this.prices = data;
      console.log(data);
    });
}
  deletePricepage(id) {
    this.service.deleteprice(id).subscribe((data: any) => {
      console.log(data);
      this.service.getPrice().subscribe((res: any) => {
        this.prices = res;
      });
    });
  }
}
