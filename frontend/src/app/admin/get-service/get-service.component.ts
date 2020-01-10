import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-get-service',
  templateUrl: './get-service.component.html',
  styleUrls: ['./get-service.component.css']
})
export class GetServiceComponent implements OnInit {
  private serviceData: any = {};

  constructor(private service: AdminService) { }

  ngOnInit() {
    this.getservice();
  }
getservice() {
  this.service.getservice().subscribe((data: any) => {
    this.serviceData = data[0];
  });
}
  deleteService(id) {
    this.service.deleteService(id).subscribe((data: any) => {
      console.log(data);
    });
  }
}
