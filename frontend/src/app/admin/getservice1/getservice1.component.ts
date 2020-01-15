import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-getservice1',
  templateUrl: './getservice1.component.html',
  styleUrls: ['./getservice1.component.css']
})
export class Getservice1Component implements OnInit {
  private serviceData: any = [];

  constructor(private service: AdminService) { }

  ngOnInit() {
    this.service.getservice1().subscribe((data: any) => {
       this.serviceData = data;
    });
  }
  deleteService(id) {
    this.service.deleteService1(id).subscribe((data: any) => {
      console.log(data);
      this.service.getservice1().subscribe((res: any) => {
        this.serviceData = res;
      });
    });
  }
}
