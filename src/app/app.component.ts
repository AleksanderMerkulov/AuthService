import { Component } from '@angular/core';
import { HttpService } from './service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpService]
})
export class AppComponent {
  title = 'AClient';
  constructor(public httpService:HttpService){}

  logOut(){
    this.httpService.logout()
  }
}
