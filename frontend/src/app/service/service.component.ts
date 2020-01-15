import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  servicesData: any = [];
  service2: any = {};
  service3: any = {};
  imageServic: any = [];
  constructor(private service: UserService) { }

  ngOnInit() {
    this.serviceData();
    this.imageService();
    this.services();
    this.serviceEnd();
  }
  serviceData() {
    this.service.serviceData().subscribe((data: any) => {
      this.servicesData = data;
      console.log(this.servicesData);
    });
  }
  imageService() {
    this.service.imageServices().subscribe((data: any) => {
   this.imageServic = data;
   console.log(this.imageServic, 'img');
    });
  }
  services() {
    this.service.services().subscribe((data: any) => {
this.service2 = data[0];
console.log(this.service2, 's2');
    });
  }
  serviceEnd() {
    this.service.serviceEnd().subscribe((data: any) => {
      this.service3 = data[0];
      console.log(this.service3, 's3');
    });
  }
}
