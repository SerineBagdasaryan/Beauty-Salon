import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-get-images-work',
  templateUrl: './get-images-work.component.html',
  styleUrls: ['./get-images-work.component.css']
})
export class GetImagesWorkComponent implements OnInit {

  private images: any = [];

  constructor(private service: AdminService) {
  }

  ngOnInit() {
    this.getimages();
  }

  getimages() {
    this.service.getImagesWork().subscribe((data: any) => {
      this.images = data;
    });
  }
  deleteImage(id) {
    this.service.deleteImages(id).subscribe((data: any) => {
      this.service.getImagesWork().subscribe((res: any) => {
        this.images = res;
      })
      console.log(data);
    });
  }
}
