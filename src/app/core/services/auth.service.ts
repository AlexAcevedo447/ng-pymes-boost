import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../lib/interfaces/entity.interface';
import { successPermission } from '../lib/interfaces/http.interface';
import { LoginError } from '../lib/interfaces/_except/http.exception';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends HttpService {

  constructor(public client:HttpClient) { 
    super(client)
  }

  public Login(body:User):Observable<successPermission>{
    try {
      const request = this.post<successPermission>('auth/signin',body);
      return request;
    } catch(error) {
      throw error;
    }
  }
}
