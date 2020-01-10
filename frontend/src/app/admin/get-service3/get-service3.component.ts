import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-get-service3',
  templateUrl: './get-service3.component.html',
  styleUrls: ['./get-service3.component.css']
})
export class GetService3Component implements OnInit {
  private serviceData: any = {};

  constructor(private service: AdminService) { }

  ngOnInit() {
    this.service.getservice3().subscribe((data: any) => {
      this.serviceData = data[0];
    });
  }
  deleteService(id) {
    this.service.deleteService3(id).subscribe((data: any) => {
      console.log(data);
    });
  }

}
