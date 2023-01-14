import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MainService } from '../main.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnChanges, OnInit,   OnDestroy {
  toggle:boolean=true;
  calltoggle(){
    this.toggle= this.toggle?false:true;
  }
  constructor(_services:MainService, private loginservice:LoginService, ){
    //  let courses = new MainService();
    console.log("courses", _services.getcourses());
    console.log(this.loginservice.setlogindetail().city);

    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('inside onChange');
  }
  ngOnInit(): void {
    console.log('inside init');
  }
  ngDoCheck(){
    console.log('inside docheck');
  }
  
  ngOnDestroy(): void {
    console.log('inside destroy');
  }
}
