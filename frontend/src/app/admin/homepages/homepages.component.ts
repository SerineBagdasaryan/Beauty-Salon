import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-homepages',
  templateUrl: './homepages.component.html',
  styleUrls: ['./homepages.component.css']
})
export class HomepagesComponent implements OnInit {
  private homedata: any = {};

  constructor(private service: AdminService) { }

  ngOnInit() {
    this.getHomepageData();
  }
  getHomepageData() {
    this.service.getHomepageData().subscribe((data: any) => {
      this.homedata = data[0];
      console.log(data);
    });
  }
  deleteHomepage(id) {
    console.log(id);
    // tslint:disable-next-line:no-unused-expression
    this.service.deleteHomepage(id).subscribe((data: any) => {
      console.log(data);
    });
  }
}
