import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const publicRoutes:Routes=[

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(publicRoutes)
  ],
  exports:[RouterModule]
})
export class PublicRoutingModule { }
