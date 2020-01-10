import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  unamePattern = '^[a-z0-9_-]{8,15}$';
  pwdPattern = '^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$';
  mobnumPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  private message: string;
  private nameError: any;
  private lastnameError: any;
  private phoneErr: any;
  private emailErr: any;
  private passwordErr: any;
  private confirmPasswordErr: any;
  private registered: any;
  private regData: any = {};
  private emailDuplicateError: any;

  constructor(private service: UserService, private fb: FormBuilder) {
    this.createform();
  }
createform() {
   this.register =  this.fb.group({
     name: ['', Validators.required],
     lastname: ['', Validators.required],
     phone: ['', Validators.required],
     email: ['', Validators.required],
     password: ['', Validators.required],
     confirmPassword: ['', Validators.required],
   });
}
  registration(name, lastname, phone, email, password, confirmPassword) {
    console.log(this.register.value, 'appended');
    this.service.registration(name, lastname, phone, email, password, confirmPassword).subscribe((data: any) => {
console.log(data.emailDuplicate);
this.message = data.msg;
this.nameError = data.nameErr;
this.lastnameError = data.lastnameErr;
this.phoneErr = data.phoneErr;
this.emailErr = data.emailErr;
this.passwordErr = data.passwordErr;
this.confirmPasswordErr = data.confirmPasswordErr;
this.registered = data.message;
this.emailDuplicateError = data.emailDuplicate;
// console.log( this.message);
    });
  }
  ngOnInit() {
    this.registerData();
  }
  registerData() {
    this.service.registerData().subscribe((data: any) => {
this.regData = data[0];
    });
  }
}
