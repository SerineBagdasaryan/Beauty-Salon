import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private homeData: any = {};
  private images: any = [];
  constructor(private service: UserService) { }

  ngOnInit() {
    this.getHomeData();
    this.getimages();
  }
  getHomeData() {
    this.service.getHomeData().subscribe((data: any) => {
      this.homeData = data[0];
      console.log(this.homeData);
    });
  }
  getimages() {
    this.service.getImagesWork().subscribe((data: any) => {
      this.images = data;
    });
  }
}
