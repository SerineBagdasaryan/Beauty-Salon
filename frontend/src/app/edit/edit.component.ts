import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  edit: FormGroup;
  user: any = {};
  constructor(private userService: UserService, private route: ActivatedRoute, private fb: FormBuilder ) {
    // this.createForm();
  }
  // createForm() {
  //   this.edit = this.fb.group({
  //     name: ['', Validators.required],
  //     lastname: ['', Validators.required],
  //     phone: ['', Validators.required],
  //     email: ['', Validators.required],
  //     password: ['', Validators.required],
  //     confirmPassword: ['', Validators.required],
  //   });
  // }
  // updateUser(name, lastname, phone, email, password, confirmPassword) {
  //   this.route.params.subscribe(params => {
  //     // @ts-ignore
  //     // tslint:disable-next-line:radix
  //     this.userService.updateUser(name, lastname, phone, email, password, confirmPassword, parseInt(params.id)).subscribe((res: any) => {
  //       console.log('hy');
  //     });
  //     console.log(typeof params.id, 'url id');
  //   });
  // }
  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.userService.editUsers(params.id).subscribe((res: any) => {
    //     this.user = res[0];
    //     console.log(this.user);
    //   });
    // });
  }

}
