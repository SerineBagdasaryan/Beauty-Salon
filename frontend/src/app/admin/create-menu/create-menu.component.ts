import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {
form: FormGroup;
  private mesage: any ;
  constructor(private service: AdminService, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      routerlink: ['', Validators.required],
    });
  }
  submitForm(name, routerlink) {
    this.service.createMenu(name, routerlink).subscribe((data: any) => {
      this.mesage = data.message;
      console.log(data);
    });
  }
  ngOnInit() {
  }

}
