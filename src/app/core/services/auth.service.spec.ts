import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Shoud have a Login method",()=>{
    expect(service.Login).toBeTruthy();
    it("Should return a type of successPermission response if response was a success",()=>{
      service.Login({email:"pruebaangular@gmail.com",password:"pruebaangular123"})
      .subscribe({
        next:(response)=>{
          expect(response.data).toBeTruthy();
          expect(response.message).toBeTruthy();
          expect(response.success).toBeTrue();
        }
      })
    })
    it("Should return an HttpErrorResponse response",()=>{
      service.Login({email:"kjahbsdjyasda",password:"jkahsbdhbcjasd"})
      .subscribe({
        error:(error)=>{
          expect(error).toBeTruthy();
          expect(error).toBeInstanceOf(HttpErrorResponse);
        }
      })
    })
  })

  
});
