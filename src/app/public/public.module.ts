import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule
  ]
})
export class PublicModule { }
