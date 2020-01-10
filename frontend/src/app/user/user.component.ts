import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute, Route, Router} from '@angular/router';
import * as decode from 'jwt-decode';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: any = [];
// tslint:disable-next-line:ban-types
  username: String = '';
  public data: object = {
    token: null,
    userId: null
  };
  private SelectedFile: File;
  private img: any = {};
  show = true;
  constructor(private userS: UserService, private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }

  OnFileSelected(event) {
    this.SelectedFile = event.target.files[0] as File;
  }
  OnUpload() {
    const formData: FormData = new FormData();
    formData.append('file', this.SelectedFile, this.SelectedFile.name);
    this.userS.sendImage(formData).subscribe((data: any) => {
      this.userS.getUserData().subscribe((res: any) => {
        this.user = res;
      });
    });
  }

  ngOnInit() {
    this. getUserData();
    this.expToken();
  }
  expToken() {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenPayload = decode(token);
      console.log(tokenPayload);
      const expiryDate = new Date(tokenPayload.exp * 1000);
      // @ts-ignore
      if (expiryDate && (Date.now() > expiryDate)) {
        // window.location.href = '/home';
        window.location.href = '/login';
        // this.router.navigate(['/login']);
      }
    }
  }
  getUserData() {
    this.userS.getUserData().subscribe((data: any) => {
      console.log(data, 'from backend');
      this.user = data;
      // console.log(data[0].role);
      if (data[0].role === 3 || data[0].role === 4) {
        this.show = false;
      }
    });
  }
}
