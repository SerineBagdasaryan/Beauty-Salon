import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AdminService} from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private adminService: AdminService, private router: Router) { }

  canActivate() {
    if (this.adminService.isAuthAdmin()) {
      return true;
    }
    alert('This page is not available.');
    // this.router.navigate(['login']);
    return false;
  }
}
