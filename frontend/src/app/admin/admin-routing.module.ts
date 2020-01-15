import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
// @ts-ignore
import {AdminComponent} from './admin/admin.component';
// @ts-ignore
import {AdminGuard} from './admin.guard';
import {AdminHeaderComponent} from './admin-header/admin-header.component';
import {AdminFooterComponent} from './admin-footer/admin-footer.component';
import {AdminSidebarComponent} from './admin-sidebar/admin-sidebar.component';
import {UsersComponent} from './users/users.component';
import {HomepagesComponent} from './homepages/homepages.component';
import {EditHomepageComponent} from './edit-homepage/edit-homepage.component';
import {GetTeamComponent} from './get-team/get-team.component';
import {EditeTeamComponent} from './edite-team/edite-team.component';
import {GetContactComponent} from './get-contact/get-contact.component';
import {EditeContactComponent} from './edite-contact/edite-contact.component';
import {GetMenuComponent} from './get-menu/get-menu.component';
import {EditeMenuComponent} from './edite-menu/edite-menu.component';
import {EditePriceComponent} from './edite-price/edite-price.component';
import {GetServiceComponent} from './get-service/get-service.component';
import {EditeServiceComponent} from './edite-service/edite-service.component';
import {Getservice1Component} from './getservice1/getservice1.component';
import {EditeService1Component} from './edite-service1/edite-service1.component';
import {GetService2Component} from './get-service2/get-service2.component';
import {EditeService2Component} from './edite-service2/edite-service2.component';
import {EditeService3Component} from './edite-service3/edite-service3.component';
import {GetService3Component} from './get-service3/get-service3.component';
import {GetFooterComponent} from './get-footer/get-footer.component';
import {EditeFooterComponent} from './edite-footer/edite-footer.component';
import {CreateMenuComponent} from './create-menu/create-menu.component';
import {CreateOurWorkImageComponent} from './create-our-work-image/create-our-work-image.component';
import {GetImagesWorkComponent} from './get-images-work/get-images-work.component';
import {EditeOurWorkImageComponent} from './edite-our-work-image/edite-our-work-image.component';
import {TeamMemberComponent} from './team-member/team-member.component';
import {CreatePriceComponent} from './create-price/create-price.component';
import {GetPriceComponent} from './get-price/get-price.component';
import {CreateServiceComponent} from './create-service/create-service.component';
import {CreateContactComponent} from './create-contact/create-contact.component';
import {ServiceWithImagesComponent} from './service-with-images/service-with-images.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard], children: [
      {path: 'users', component: UsersComponent, canActivate: [AdminGuard]},
      {path: 'createImageWork', component: CreateOurWorkImageComponent, canActivate: [AdminGuard]},
      {path: 'createService', component: CreateServiceComponent, canActivate: [AdminGuard]},
      {path: 'createTeamMember', component: TeamMemberComponent, canActivate: [AdminGuard]},
      {path: 'getImageWork', component: GetImagesWorkComponent, canActivate: [AdminGuard]},
      {path: 'homepages', component: HomepagesComponent, canActivate: [AdminGuard]},
      {path: 'getTeam', component: GetTeamComponent, canActivate: [AdminGuard]},
      {path: 'getContact', component: GetContactComponent, canActivate: [AdminGuard]},
      {path: 'getMenu', component: GetMenuComponent, canActivate: [AdminGuard]},
      {path: 'createPrice', component: CreatePriceComponent, canActivate: [AdminGuard]},
      {path: 'getPrice', component: GetPriceComponent, canActivate: [AdminGuard]},
      {path: 'getService', component: GetServiceComponent, canActivate: [AdminGuard]},
      {path: 'getService1', component: Getservice1Component, canActivate: [AdminGuard]},
      {path: 'getService2', component: GetService2Component, canActivate: [AdminGuard]},
      {path: 'getService3', component: GetService3Component, canActivate: [AdminGuard]},
      {path: 'getfooter', component: GetFooterComponent, canActivate: [AdminGuard]},
      {path: 'createmenu', component: CreateMenuComponent, canActivate: [AdminGuard]},
      {path: 'createContact', component: CreateContactComponent, canActivate: [AdminGuard]},
      {path: 'createServiceWithImages', component: ServiceWithImagesComponent, canActivate: [AdminGuard]},
    ] },
  {path: 'editehome/:id', component: EditHomepageComponent, canActivate: [AdminGuard] },
  {path: 'editeteam/:id', component: EditeTeamComponent, canActivate: [AdminGuard]},
  {path: 'editecontact/:id', component: EditeContactComponent, canActivate: [AdminGuard]},
  { path: 'adminSidebar', component: AdminSidebarComponent, canActivate: [AdminGuard]},
  { path: 'editemenu/:id', component: EditeMenuComponent, canActivate: [AdminGuard]},
  { path: 'editeprice/:id', component: EditePriceComponent, canActivate: [AdminGuard]},
  { path: 'editeservice/:id', component: EditeServiceComponent, canActivate: [AdminGuard]},
  { path: 'editeservice1/:id', component: EditeService1Component, canActivate: [AdminGuard]},
  { path: 'editeservice2', component: EditeService2Component, canActivate: [AdminGuard]},
  { path: 'editeservice3', component: EditeService3Component, canActivate: [AdminGuard]},
  { path: 'editefooter', component: EditeFooterComponent, canActivate: [AdminGuard]},
  {path: 'editeImageWork/:id', component: EditeOurWorkImageComponent, canActivate: [AdminGuard]},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
