import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';

const publicRoutes:Routes=[
  {path:"", component:LoginPageComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(publicRoutes)
  ],
  exports:[RouterModule]
})
export class PublicRoutingModule { }
