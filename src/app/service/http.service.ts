import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from './token';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  token:Token|undefined

  constructor(public http:HttpClient) { }

  login(user:User){
    return this.http.post('/api/auth/Login', User)
    // .subscribe((data:any)=>{
    //   localStorage.setItem('auth_token', data.token)
    // })
  }

  logout(){
    localStorage.removeItem('token') //include app.component.ts
  }

  //boolean fun. for check logIn you or not
  public get LogIn():boolean{
    return (localStorage.getItem('token') !== null)
  }

  registration(user:User){
    this.http.post('/api/auth/Register',User)
  }

  giveEmail(){
    this.http.get('')
  }

}
