import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

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
  getId(id) {
    console.log(id, 'id');
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.menu, event.previousIndex, event.currentIndex);
    // console.log(event, 'p');
    // console.log(event.currentIndex, 'c');
    this.service.dragAndDrop(event.currentIndex, event.previousIndex);
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
