
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../service/http.service';
import { Token } from '../service/token';
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
 

  constructor(public httpService:HttpService,
    public rout:ActivatedRoute,
    public router:Router) { }

  ngOnInit(): void {
  }

  auth(){
    this.httpService.login(this.user)
    .subscribe((data:any)=>{
      this.token=data
    })

    if(this.token !== undefined){
      this.router.navigateByUrl('/profile')
      localStorage.setItem('auth_token',this.token)
    }
  }

}
