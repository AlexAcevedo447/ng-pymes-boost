import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm:FormGroup;
  visibility:boolean = false;

  constructor(private _fb:FormBuilder) { 
    //Building form
    this.loginForm =  this._fb.group({
      //Controls available in this form
      email:["",Validators.compose([
        Validators.required,
        Validators.minLength(10)
      ])],
      password:["",Validators.compose([
        Validators.required
      ])]
    })
  }

  ngOnInit(): void {
  }
  //Sends user data to backend
  onSendData(values:any):void{
    console.log(values)
  }

  //Show/Hide password function
  switchVisibility():void{
    this.visibility = !this.visibility;
  }
  //Switches the password input type
  passType():string{
    return this.visibility?'text':'password'
  }

}
