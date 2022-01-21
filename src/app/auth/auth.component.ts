
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../service/http.service';
import { User } from '../service/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers:[HttpService]
})
export class AuthComponent implements OnInit {

  user:User = new User('alex','123')
  token:string|undefined
  regCondition:boolean = true
  getReg:boolean = false
 

  constructor(public httpService:HttpService,
    public rout:ActivatedRoute,
    public router:Router) { }

  ngOnInit(): void {
    this.regCondition = true
  }

  auth(){
    this.httpService.login(this.user)
    .subscribe((data:any)=>{
      this.token=data
      localStorage.setItem('auth_token',data)
    }, error=>{
      alert('Неверный логин или пароль. Проверьте правильность или зарегестируйтесь')
      console.log(this.user)
      this.regCondition = false;
      console.log(this.regCondition)
    } )
    

    if(this.token !== undefined){
      this.router.navigateByUrl('/profile')
      localStorage.setItem('auth_token',this.token)
      const myHeader = new HttpHeaders().set('Authorization','Bearer '+this.token)
    }
  }

  getRegF(){
    this.getReg = true
  }

  reg(){
    this.httpService.registration(this.user)
    console.log('work')
  }

}
