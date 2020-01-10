import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-create-our-work-image',
  templateUrl: './create-our-work-image.component.html',
  styleUrls: ['./create-our-work-image.component.css']
})
export class CreateOurWorkImageComponent implements OnInit {
images;
  multipleImages = [];
  constructor(private service: AdminService) { }

  ngOnInit() {
  }
  selectMultipleImage(event) {
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }
  onMultipleSubmit() {
    const formData = new FormData();
    for (const img of this.multipleImages) {
      formData.append('files', img);
    }
    this.service.multipleFiles(formData).subscribe((data: any) => {
      console.log(data);
    });
  }
  // selectImage(event) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.images = file;
  //   }
  // }
  //
  // onSubmit() {
  //   const formData = new FormData();
  //   formData.append('file', this.images);
  //   this.service.uploadWorkImages(formData).subscribe((data: any) => {
  //     console.log(data);
  //   });
  // }
}
