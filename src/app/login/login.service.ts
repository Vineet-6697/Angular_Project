import { Injectable } from '@angular/core';
import { MainService } from '../main.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor( private _services:MainService) { 
    console.log("login services " , this._services.setaddress().city);
  }

  setlogindetail(){
// console.log(this._services.setaddress().city);
    return{
      "name":"vineet",
      "age":22,
      "phone":9875,
      "city": this._services.setaddress().city
    }
  }
}
