import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private datafooter: any = {};

  constructor(private service: UserService) { }

  ngOnInit() {
    this.footerData();
  }
  footerData() {
    this.service.footerData().subscribe((data: any) => {
      this.datafooter = data[0];
      // console.log(this.datafooter) ;
    });
  }
}
