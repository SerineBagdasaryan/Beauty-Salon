import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {PriceComponent} from './price/price.component';
import {ServiceComponent} from './service/service.component';
import {TeamComponent} from './team/team.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserComponent} from './user/user.component';
import {EditComponent} from './edit/edit.component';
import {
  AuthGuardService as AuthGuard
} from './auth-guard.service';
import {LogoutComponent} from './logout/logout.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import {ChangepasswordComponent} from './changepassword/changepassword.component';



const routes: Routes = [
  {path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'price', component: PriceComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'team', component: TeamComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'logout' , component: LogoutComponent},
  {path: 'myAccount', component: UserComponent, canActivate : [AuthGuard] },
  {path: 'edit/:id', component: EditComponent},
  {path: 'forgotpassword', component: ForgotpasswordComponent},
  {path: 'changePassword', component: ChangepasswordComponent},
];

// @ts-ignore
// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



