import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewplansComponent } from './viewplans/viewplans.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { UserviewplanComponent } from './userviewplan/userviewplan.component';
import { PaybillComponent } from './paybill/paybill.component';

const routes: Routes = [
{
  path:"plans",
  component:ViewplansComponent 

},
{
  path:"home",
  component:HomeComponent
},
{
  path:"login",
  component:LoginComponent
},
{
  path:"signup",
  component:SignupComponent
},
{
  path:"userpage",
  component:UserpageComponent
},
{
  path:"admin",
  component:AdminpageComponent
},
{
  path:"viewusers",
  component:ViewusersComponent
},
{
  path:"viewplans",
  component:ViewplansComponent
},
{
  path:"userviewplans",
  component:UserviewplanComponent
},
{
  path:"paybill",
  component:PaybillComponent
},
{
  path:"**",
  component:HomeComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
