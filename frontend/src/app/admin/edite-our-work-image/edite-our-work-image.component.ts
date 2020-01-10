import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edite-our-work-image',
  templateUrl: './edite-our-work-image.component.html',
  styleUrls: ['./edite-our-work-image.component.css']
})
export class EditeOurWorkImageComponent implements OnInit {
images;
  constructor(private service: AdminService, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }
  updateImages() {
    this.route.params.subscribe(params => {
      console.log(params.id);
      const formData = new FormData();
      formData.append('file', this.images);
      formData.append('id', params.id);
      this.service.updateImagesWork(formData).subscribe((data: any) => {
        console.log(data);
      });
    });
  }
}
