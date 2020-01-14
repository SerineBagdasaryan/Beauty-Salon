import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:ban-types
  public isAuthAdmin(): Boolean {
    const userData = localStorage.getItem('token');
    const message = JSON.parse(localStorage.getItem('message'));
    console.log(message.user);
    console.log(userData);
    if (userData && JSON.parse(userData) && message.user === 'admin') {
      return true;
    }
    return false;
  }

  getUsers() {
    return this.http.get(`${this.url}/getUsers`);
  }
  getAdminData() {
    return this.http.get(`${this.url}/getAdminData`);
  }
  getHomepageData() {
    return this.http.get(`${this.url}/getHomepageData`);
  }
  editHome() {
    return this.http.get(`${this.url}/editHome`);
  }

  deleteHomepage(id) {
    console.log(id);
    return this.http.get(`${this.url}/deleteHomePage/${id}`);
  }
  getTeam() {
    return this.http.get(`${this.url}/getTeam`);
  }
  editTeam(id) {
    return this.http.get(`${this.url}/editTeam/${id}`);
  }
  updateTeam(formData) {
    return this.http.post(`${this.url}/updateTeam`, formData);
  }
  createContactData(address, phone, email, customerSupport) {
    const obj = { address, phone, email, customerSupport };
    return this.http.post(`${this.url}/createContact`, obj);
  }
  getContact() {
    return this.http.get(`${this.url}/getContact`);
  }
  // tslint:disable-next-line:max-line-length
  updateContact(address, phone, email, customerSupport, id) {
    // tslint:disable-next-line:max-line-length
    const obj = { address, phone, email, customerSupport, id};
    return this.http.post(`${this.url}/updateContact`, obj);
  }
  editeContact(id) {
    return this.http.get(`${this.url}/editeContact/${id}`);
  }
  deleteContactPage(id) {
    return this.http.get(`${this.url}/daleteContactPage/${id}`);
  }
  deleteTeampage(id) {
    return this.http.get(`${this.url}/daleteTeamPage/${id}`);
  }
  getMenuPage() {
    return this.http.get(`${this.url}/getMenu`);
  }
  editMenu(id) {
    return this.http.get(`${this.url}/editMenu/${id}`);
  }
  updateMenu(name, routerlink, id): Observable<any> {
    console.log(typeof id, 'gg');
    const obj = {
      id,
      name,
      routerlink

    };
    console.log(obj);
    return this.http.post(`${this.url}/updateMenu`, obj);
  }
  deleteMenu(id) {
    return this.http.get(`${this.url}/deleteMenu/${id}`);
  }
  getPrice() {
    return this.http.get(`${this.url}/getPrice`);
  }
  editePrice(id) {
    return this.http.get(`${this.url}/editePrice/${id}`);
  }
  updateprice(price, serviceName, description, discount, id) {
    const obj = {price, serviceName, description, discount, id};
    return this.http.post(`${this.url}/updateprice`, obj);
  }
  deleteprice(id) {
    return this.http.get(`${this.url}/deleteprice/${id}`);
  }
getservice() {
    return this.http.get(`${this.url}/getService`);
}
deleteService(id) {
    return this.http.get(`${this.url}/deleteService/${id}`);
}
  updateService(formData) {
    return this.http.post(`${this.url}/updateservice`, formData);
  }
  editeService(id) {
    return this.http.get(`${this.url}/editeService/${id}`);
  }
  getservice1() {
    return this.http.get(`${this.url}/getService1`);
  }
  deleteService1(id) {
    return this.http.get(`${this.url}/deleteService1/${id}`);
  }
  updateService1(text1, text2, text3, text4, text5, text6) {
    const obj = {text1, text2, text3, text4, text5, text6};
    return this.http.post(`${this.url}/updateservice1`, obj);
  }
  getservice2() {
    return this.http.get(`${this.url}/getService2`);
  }
  deleteService2(id) {
    return this.http.get(`${this.url}/deleteService2/${id}`);
  }
  updateService2(text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14) {
    const obj = {text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14};
    return this.http.post(`${this.url}/updateservice2`, obj);
  }
  getservice3() {
    return this.http.get(`${this.url}/getService3`);
  }
  deleteService3(id) {
    return this.http.get(`${this.url}/deleteService3/${id}`);
  }
  updateService3(text1, text2) {
    const obj = {text1, text2};
    return this.http.post(`${this.url}/updateservice3`, obj);
  }
  getfooterData() {
    return this.http.get(`${this.url}/getFooter`);
  }
  deleteFooter(id) {
    return this.http.get(`${this.url}/deleteFooter/${id}`);
  }
  updateFooter(text1) {
    const obj = {text1};
    return this.http.post(`${this.url}/updateFooter`, obj);
  }

  updateHomePage(formData) {
    return this.http.post(`${this.url}/updateHomePage`, formData);
  }
  uploadWorkImages(formData) {
    return this.http.post(`${this.url}/uploadWorkImages`, formData);
  }
  createMenu(name, routerlink) {
    const obj = {name, routerlink};
    return this.http.post(`${this.url}/createMenu`, obj);
  }
  getImagesWork() {
    return this.http.get(`${this.url}/getImagesWork`);
  }
  updateImagesWork(formData) {
    return this.http.post(`${this.url}/updateImagesWork`, formData);
  }
  multipleFiles(formData) {
    return this.http.post(`${this.url}/multipleFiles`, formData);
  }
  deleteImages(id) {
    return this.http.get(`${this.url}/deleteImagesWork/${id}`);
  }
  createTeamMember(formData) {
    return this.http.post(`${this.url}/createTeamMember`, formData);
  }
  createPrice(price, serviceName, description, discount) {
    const obj = { price, serviceName, description, discount};
    return this.http.post(`${this.url}/createPrice`, obj);
  }
  createService(formData) {
return this.http.post(`${this.url}/createService`, formData);
  }
  dragAndDrop(currentIndex, previousIndex) {
    const obj = {currentIndex, previousIndex}
    return this.http.post(`${this.url}/dragDrop`, obj);
  }
}


