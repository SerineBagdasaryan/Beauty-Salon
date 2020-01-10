import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  private message: string;
  public email: any;
  public code: void;
public show = true;
public show1 = true;
public show2 = true;
  private msg: string;
  private success: Event;
  private msgEqual: any;
  private msgCode: any;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.createForm();
  }
createForm() {
    this.forgotPasswordForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confpassword: ['', Validators.required],
      code: ['', Validators.required],
    });
}

  sendEmail(email) {
    this.userService.sendEmail(email).subscribe((data: any) => {
      if (data.success !== false) {
        this.code =  data.code;
        this.email = data.email;
        console.log(data);
        this.show = false;
        this.success = data.success;
      } else {
        this.message = data.msg;
      }
    });
  }
//   sendCode(code) {
// // @ts-ignore
//     if (this.code === code && this.success === true) {
// this.show1 = false;
//
// } else {
// this.show1 = true;
// }
//   }
  sendPassword( code, password, confpassword) {
    this.userService.sendNewPassword(code, password, confpassword, this.email).subscribe((data: any) => {
        this.msg = data.msg;
        this.msgEqual = data.msgEqual;
        this.msgCode = data.msgCode;
        if (data.success === true) {
          this.router.navigate(['login']);
        }

    });
  }
  ngOnInit() {
  }

}
