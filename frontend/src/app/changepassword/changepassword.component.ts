import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  private errMessage: string;
  public show = true;
  private msg: string;
  private oldPerr: string;
  private message: any;
  constructor(private fb: FormBuilder, private service: UserService) {
    this.createForm();
  }
createForm() {
   this.changePasswordForm = this.fb.group({
     oldpassword: ['', Validators.required ],
     newpassword: ['', Validators.required ],
     confirmpassword: ['', Validators.required ],
   });
}
  changePassword(oldpassword, newpassword, confirmpassword) {
    this.service.changePassword(oldpassword, newpassword, confirmpassword).subscribe((data: any) => {
      this.errMessage = data.message;
      console.log(data);
      this.oldPerr = data.msg;
      this.message = data.msges;
    });
  }

  // newPassword(password) {
  //   this.service.newPassword(password).subscribe((data: any) => {
  //     this.msg = data.msg;
  //     console.log(data);
  //   //   if (data.success === true) {
  //   //     this.show = false;
  //   //   }
  //   //   this.errMessage = data.msg;
  //   //   console.log(data);
  //   });
  // }
  ngOnInit() {
  }

}
