import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  PB_Url:string = environment.baseApiUrl;

  constructor(private _client:HttpClient) {}

  protected get<T>(urlFragment:string):Observable<T>{
    return this._client.get<T>(this.PB_Url+urlFragment);
  }

  protected post<T>(urlFragment:string, body:any):Observable<T>{
    return this._client.post<T>(this.PB_Url+urlFragment,body);
  }

  public put<T>(urlFragment:string,id:string,body:any):Observable<T>{
    return this._client.put<T>(this.PB_Url+urlFragment+id,body);
  }

  public delete<T>(urlFragment:string, id:string):Observable<T>{
    return this._client.delete<T>(this.PB_Url+urlFragment+id);
  }
}
