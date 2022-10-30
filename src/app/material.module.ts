import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule
  ],
  exports:[
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MaterialModule { }
