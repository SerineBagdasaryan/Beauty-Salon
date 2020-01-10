import { Component, OnInit } from '@angular/core';
import {AdminService} from '../admin.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edite-menu',
  templateUrl: './edite-menu.component.html',
  styleUrls: ['./edite-menu.component.css']
})
export class EditeMenuComponent implements OnInit {
  private menu: any = {};
  menuForm: FormGroup;
  constructor(private service: AdminService,  private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.createForm();
  }
  createForm() {
    this.menuForm = this.fb.group({
      name: ['', Validators.required],
      routerlink: ['', Validators.required],
    });
  }
  updateMenu(name, routerlink) {
    this.route.params.subscribe(params => {
      // tslint:disable-next-line:radix
      this.service.updateMenu(name, routerlink, parseInt(params.id)).subscribe((res: any) => {
        console.log(777);
      });
      // console.log(typeof params.id,'url id');
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.service.editMenu(params.id).subscribe((res: any) => {
        this.menu = res[0];
        console.log(this.menu);
      });
    });
  }

}
