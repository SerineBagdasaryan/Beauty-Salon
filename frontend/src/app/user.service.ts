import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }
  // tslint:disable-next-line:ban-types
  public isAuthenticated(): Boolean {
    const userData = localStorage.getItem('token');
    if (userData && JSON.parse(userData)) {
      return true;
    }
    return false;
  }
  getMenu() {
    return this.http.get(`${this.url}/menu`);
  }
  getHomeData() {
    return this.http.get(`${this.url}/getHomeData`);
  }

  footerData() {
    return this.http.get(`${this.url}/footerData`);
  }
  serviceData() {
    return this.http.get(`${this.url}/serviceData`);
  }
  imageServices() {
    return this.http.get(`${this.url}/imageService`);
  }
  services() {
    return this.http.get(`${this.url}/service`);
  }
  serviceEnd() {
    return this.http.get(`${this.url}/serviceEnd`);
  }
  teamData() {
    return this.http.get(`${this.url}/team`);
  }
  priceData() {
    return this.http.get(`${this.url}/price`);
  }
  prices() {
    return this.http.get(`${this.url}/prices`);
  }
  pricesData() {
    return this.http.get(`${this.url}/pricesData`);
  }
  contact() {
    return this.http.get(`${this.url}/contact`);
  }
  loginData() {
    return this.http.get(`${this.url}/loginData`);
  }
  registerData() {
    return this.http.get(`${this.url}/registerData`);
  }
  public setUserInfo(user, message) {
    localStorage.setItem('token', JSON.stringify(user));
    localStorage.setItem('message', JSON.stringify(message));
  }
  public setUserInfoFG(user) {
    localStorage.setItem('token', JSON.stringify(user));
  }

  public validate(email, password, checkbox) {
    console.log(email, password, checkbox);
    // @ts-ignore
    return this.http.post(`${this.url}/login`, { email, password, checkbox});
  }
   public getUserData() {
    return this.http.get(`${this.url}/getUser`);
  }
  // @ts-ignore
  googleLogin(userdata) {
  return this.http.post(`${this.url}/auth/google`, userdata);
  }
  authFb(userFb) {
    return this.http.post(`${this.url}/auth/facebook`, userFb);
  }
sendImage(formData) {
    return this.http.post(`${this.url}/upload`, formData);
}
  getImagesWork() {
    return this.http.get(`${this.url}/getImagesWork`);
  }
  getImage(): Observable<any> {
    return this.http.get(`${this.url}/getImage`);
  }
  registration(name, lastname, phone, email, password, confirmPassword) {
    const obj = {
      name,
      lastname,
      phone,
      email,
      password,
      confirmPassword
    };
    console.log(obj);
    return this.http.post(`${this.url}/register`, obj);

  }
  sendEmail(email) {
    const obj = {
      email
    };
    return this.http.post(`${this.url}/forgotPassword`, obj);
  }
  sendNewPassword(code, password, confpassword, email) {
    const obj = {
       code,
      password,
      confpassword,
      email
    };
    return this.http.post(`${this.url}/newPassword`, obj);
  }

  changePassword(oldpassword, newpassword, confirmpassword) {
    const obj = {
      oldpassword,
      newpassword,
      confirmpassword,
    };
    console.log(obj);
    return this.http.post(`${this.url}/changePassword`,  obj);
  }
  // tslint:disable-next-line:ban-types
  public isAuthAdmin(): Boolean {
    const userData = localStorage.getItem('token');
    const message = JSON.parse(localStorage.getItem('message'));
    if (userData && JSON.parse(userData) && message.user === 'admin') {
      return true;
    }
    return false;
  }

//   getUser(id) {
//       return this.http.get(`${this.url}/user/${id}`);
//     }
//   user() {
//     return this.http.get(`${this.url}/user`, {
//       observe: 'body',
//       withCredentials: true,
//       headers: new HttpHeaders().append('Content-Type', 'application/json')
//     });
//   }
//   //
//   // logout() {
//   //   return this.http.get(`${this.url}/logout`, {
//   //     observe: 'body',
//   //     withCredentials: true,
//   //     headers: new HttpHeaders().append('Content-Type', 'application/json')
//   //   });
//   // }
//   editUsers(id) {
//     return this.http.get(`${this.url}/edit/${id}`);
//   }
//   updateUser(name, lastname, phone, email, password, confirmPassword, id) {
//     const obj = {
//       id,
//       name,
//       lastname,
//       phone,
//       email,
//       password,
//       confirmPassword
//     };
//     return this.http.post(`${this.url}/update`, obj);
//   }
//
//   deleteUsers(id) {
//     return this.http.get(`${this.url}/delete/${id}`);
//   }
}
