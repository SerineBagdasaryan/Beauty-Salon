import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edite-footer',
  templateUrl: './edite-footer.component.html',
  styleUrls: ['./edite-footer.component.css']
})
export class EditeFooterComponent implements OnInit {
footerForm: FormGroup;
  private fdata: any = {};
  constructor(private fb: FormBuilder, private serviceData: AdminService) {
  this.createForm();
  }


  createForm() {
    this.footerForm = this.fb.group({
      text1: ['', Validators.required],
    });
  }
  updateFooterData( text1) {
    this.serviceData.updateFooter(text1).subscribe((data: any) => {
      console.log(data);
    });
  }
  ngOnInit() {
  this.serviceData.getfooterData().subscribe((data: any) => {
    this.fdata = data[0];
  });
  }
}
