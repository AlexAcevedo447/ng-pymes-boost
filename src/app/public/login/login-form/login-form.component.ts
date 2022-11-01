import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/lib/interfaces/entity.interface';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm:FormGroup;
  visibility:boolean = false;

  constructor(private _fb:FormBuilder, private _authService:AuthService) { 
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
  onSendData(values:User):void{
    this._authService.Login(values).pipe(delay(5000)).subscribe((permission)=>{
      console.log(permission);
      localStorage.setItem("token",permission.data.token);
    })
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
