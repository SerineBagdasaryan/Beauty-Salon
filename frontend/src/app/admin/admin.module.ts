import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import {RouterModule} from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import {AdminRoutingModule} from './admin-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HomepagesComponent } from './homepages/homepages.component';
import { EditHomepageComponent } from './edit-homepage/edit-homepage.component';
import { GetTeamComponent } from './get-team/get-team.component';
import { EditeTeamComponent } from './edite-team/edite-team.component';
import { GetContactComponent } from './get-contact/get-contact.component';
import { EditeContactComponent } from './edite-contact/edite-contact.component';
import { GetMenuComponent } from './get-menu/get-menu.component';
import { EditeMenuComponent } from './edite-menu/edite-menu.component';
import { EditePriceComponent } from './edite-price/edite-price.component';
import { GetServiceComponent } from './get-service/get-service.component';
import { EditeServiceComponent } from './edite-service/edite-service.component';
import { Getservice1Component } from './getservice1/getservice1.component';
import { EditeService1Component } from './edite-service1/edite-service1.component';
import { GetService2Component } from './get-service2/get-service2.component';
import { EditeService2Component } from './edite-service2/edite-service2.component';
import { GetService3Component } from './get-service3/get-service3.component';
import { EditeService3Component } from './edite-service3/edite-service3.component';
import { GetFooterComponent } from './get-footer/get-footer.component';
import { EditeFooterComponent } from './edite-footer/edite-footer.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { CreateOurWorkImageComponent } from './create-our-work-image/create-our-work-image.component';
import { GetImagesWorkComponent } from './get-images-work/get-images-work.component';
import { EditeOurWorkImageComponent } from './edite-our-work-image/edite-our-work-image.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { CreatePriceComponent } from './create-price/create-price.component';
import { GetPriceComponent } from './get-price/get-price.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { CreateContactComponent } from './create-contact/create-contact.component';



@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AdminComponent, AdminHeaderComponent, AdminFooterComponent, AdminSidebarComponent, UsersComponent, HomepagesComponent, EditHomepageComponent, GetTeamComponent, EditeTeamComponent, GetContactComponent, EditeContactComponent, GetMenuComponent, EditeMenuComponent, EditePriceComponent, GetServiceComponent, EditeServiceComponent, Getservice1Component, EditeService1Component, GetService2Component, EditeService2Component, GetService3Component, EditeService3Component, GetFooterComponent, EditeFooterComponent, CreateMenuComponent, CreateOurWorkImageComponent, GetImagesWorkComponent, EditeOurWorkImageComponent, TeamMemberComponent, CreatePriceComponent, GetPriceComponent, CreateServiceComponent, CreateContactComponent],
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
      ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    ],
  exports: [AdminComponent, AdminHeaderComponent, AdminFooterComponent, AdminSidebarComponent
  ]
})
export class AdminModule { }
