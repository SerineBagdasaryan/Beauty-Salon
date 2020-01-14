import {Component, Input, OnInit, Pipe} from '@angular/core';
// @ts-ignore
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser} from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() fbUrl: any;
  @Input() googleUrl: string;
  // tslint:disable-next-line:max-line-length
  private fbUser: SocialUser;
  // tslint:disable-next-line:max-line-length
  private googleUser: SocialUser;
  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private authService: UserService, private router: Router, private sanitizer: DomSanitizer, private authServices: AuthService ) {
    this.createForm();
  }
  loginForm: FormGroup;
  message: any;
  marked = false;
  theCheckbox = false;
  private loginInfo: any = {};
  user;
  public error: any;
  signInWithFB(): void {
    this.authServices.signIn(FacebookLoginProvider.PROVIDER_ID).then((userDataFb) => {
      this.fbUser = userDataFb;
      console.log(userDataFb);
      this.authService.authFb( this.fbUser).subscribe((data: any) => {
        this.authService.setUserInfoFG(data.token);
        window.location.href = '/home';
      });
    });
  }
  signInWithgoogle(): void {
    this.authServices.signIn(GoogleLoginProvider.PROVIDER_ID).then((userDataG) => {
      this.googleUser = userDataG;
      console.log(userDataG);
      this.authService.googleLogin(this.googleUser).subscribe((data: any) => {
        this.authService.setUserInfoFG(data.token);
        window.location.href = '/home';
      });
    });
  }


  toggleVisibility(event) {
    this.marked = event.target.checked;
  }
  createForm() {
    // @ts-ignore
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      checkbox: [''],
    });
  }

  ngOnInit() {
this.loginData();
if (this.authService.isAuthAdmin()) {
      this.router.navigate(['admin']);
    }
  }
  loginData() {
    this.authService.loginData().subscribe((data: any) => {
      this.loginInfo = data[0];
      // console.log(this.loginInfo);
    });
  }
  login(email, password, checkbox) {
    console.log(checkbox);
    this.authService.validate(email, password, this.marked).subscribe((data: any) => {
      this.authService.setUserInfo(data.token, data.message);
      // this.authService.setUserInfo(obj);
      if (data.token && data.message.user === 'admin') {
        this.router.navigate(['admin']);
      }
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['home']);
      }
      if (data.message.user === 'user') {
        window.location.href = '/home';
        // this.router.navigate(['home']);
      } else if (data.message.user === 'admin') {
        this.router.navigate(['admin']);

      } else {
        this.router.navigate(['login']);
      }
    }, ((error) => {
      this.error = error.error.message;
      console.log(this.error, 'res');
    }));
  }

}





  // googleLogin() {
  //   this.authService.googleLogin().subscribe((data: any) => {
  //     console.log(data, 'hy');
  //     // window.location.href = data.uri;
  //     // this.router.navigate(['home']);
  //     // window.location.href = 'http://localhost:3000/auth/google';
  //   });
  //
  // }
  //
  // fbLogin() {
  //   this.authService.authFb().subscribe((data: any) => {
  //     console.log(data);
  //     // this.router.navigate(['home']);
  //   });
  // }
  // authFb() {
  //   this.authService.authFb();
  //   // this.authService.googleLogin().subscribe((data: any) => {
  //   //   console.log(data);
  //   // });
  //   // window.location.href = 'http://localhost:3000/auth/facebook';
  //   // this.authService.authFb().subscribe((data: any) => {
  //   //   console.log(data);
  //   // });
  // }


