import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { EditComponent } from './edit/edit.component';
import {AuthInterceptor} from './auth.interceptor';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import {AdminModule} from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('505112040098425')
  },
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('258742303024-3h3pnqclbmt4n67nepqjvoqlbp1gptj4.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    TeamComponent,
    PriceComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    ForgotpasswordComponent,
    ChangepasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocialLoginModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule,
    AdminModule,
    BrowserAnimationsModule,
  ],
  // tslint:disable-next-line:max-line-length
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true , },   {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
