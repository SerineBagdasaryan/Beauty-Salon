import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-get-menu',
  templateUrl: './get-menu.component.html',
  styleUrls: ['./get-menu.component.css']
})
export class GetMenuComponent implements OnInit {
  private menu: any;

  constructor(private service: AdminService) { }

  ngOnInit() {
    this.getMenuPage();
  }
  deleteMenu(id) {
    this.service.deleteMenu(id).subscribe((data: any) => {
      console.log(data);
    });
  }
getMenuPage() {
  this.service.getMenuPage().subscribe((data: any) => {
    this.menu = data;
    console.log(this.menu);
  });
}
}
