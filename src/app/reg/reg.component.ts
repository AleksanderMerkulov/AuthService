import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../service/http.service';
import { User } from '../service/user';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  user:User = new User('', '')

  constructor(public httpService:HttpService,
    public rout:ActivatedRoute,
    public router:Router) { }

  ngOnInit(): void {
  }

  registration(){

  }
}
