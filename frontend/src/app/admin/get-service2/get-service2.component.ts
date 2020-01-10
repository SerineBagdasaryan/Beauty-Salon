import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-get-service2',
  templateUrl: './get-service2.component.html',
  styleUrls: ['./get-service2.component.css']
})
export class GetService2Component implements OnInit {
  private serviceData: any = {};

  constructor(private service: AdminService) { }

  ngOnInit() {
    this.getservice();
  }
getservice() {
    this.service.getservice2().subscribe((data: any) => {
      this.serviceData = data[0];
    });
}
  deleteService(id) {
    this.service.deleteService2(id).subscribe((data: any) => {
      console.log(data);
    });
  }

}
