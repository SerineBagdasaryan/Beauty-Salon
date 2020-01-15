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
  public arr = [];
  constructor(private service: AdminService) { }

  ngOnInit() {
    this.getMenuPage();
  }
  getId(id) {
    console.log(id, 'id');
  }
  // @ts-ignore
  drop(event: CdkDragDrop<string[]>) {
    const parent = document.getElementsByClassName('example-box');
    setTimeout(() => {
      // @ts-ignore
      for (const elem of parent) {
      this.arr.push(elem.firstChild.value);
        // tslint:disable-next-line:no-unused-expression align
      } console.log(this.arr); }, 0);
    console.log(this.arr);
    moveItemInArray(this.menu, event.previousIndex, event.currentIndex);
    this.service.dragAndDrop(event.currentIndex, event.previousIndex).subscribe((data: any) => {
      console.log(data);
    });
  }
deleteMenu(id) {
    this.service.deleteMenu(id).subscribe((data: any) => {
      console.log(data);
      this.service.getMenuPage().subscribe((res: any) => {
        this.menu = res;
      });
    });
  }
getMenuPage() {
  this.service.getMenuPage().subscribe((data: any) => {
    this.menu = data;
    console.log(this.menu);
  });
}
}
