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
    return this.http.post('', User)
    // .subscribe((data:any)=>{
    //   localStorage.setItem('auth_token', data.token)
    // })
  }

  logout(){
    localStorage.removeItem('token')
  }

  public get LogIn():boolean{
    return (localStorage.getItem('token') !== null)
  }

}
