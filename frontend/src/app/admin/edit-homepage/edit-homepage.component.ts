import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../admin.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-edit-homepage',
  templateUrl: './edit-homepage.component.html',
  styleUrls: ['./edit-homepage.component.css']
})
export class EditHomepageComponent implements OnInit {
  private data: any = {};
  homeForm: FormGroup;
  private images;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private service: AdminService) {
    this.createForm();
  }

  createForm() {
    this.homeForm = this.fb.group({
      textInfo: ['', Validators.required],
      textInfo1: ['', Validators.required],
      buttonText: ['', Validators.required],
      aboutSalon: ['', Validators.required],
      imageName: ['', Validators.required],
      // image: [null],
    });
  }
  ngOnInit() {
      this.service.editHome().subscribe((res: any) => {
        this.data = res[0];
        // console.log(this.data);
      });
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.images = file;
    // this.homeForm.patchValue({
    //   image: file
    // });
    // this.homeForm.get('image').updateValueAndValidity();
  }
  submitForm() {
    const formData: any = new FormData();
    formData.append('textInfo', this.homeForm.get('textInfo').value);
    formData.append('textInfo1', this.homeForm.get('textInfo1').value);
    formData.append('buttonText', this.homeForm.get('buttonText').value);
    formData.append('aboutSalon', this.homeForm.get('aboutSalon').value);
    formData.append('imageName', this.homeForm.get('imageName').value);
    formData.append('file', this.images);
    this.service.updateHomePage(formData).subscribe((data: any) => {
      console.log(data);
    });
  }
}


