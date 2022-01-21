import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegComponent } from './reg/reg.component';


const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'auth', component:AuthComponent},
  {path:'profile', component:ProfileComponent},
  {path:'reg', component:RegComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    ProfileComponent,
    RegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
