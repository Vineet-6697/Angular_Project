import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
  getcourses(){
    return ['c', 'c++', 'python', 'java'];
  }

  setaddress(){
    return{
      "city":"Greater Noida",
      "state":"U.P",
      "country":"India"
    }
  }
}
