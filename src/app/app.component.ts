import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  productdetail:any=null;
  constructor(){}
  
  assignData(event:any){
  console.log(event);
  this.productdetail=event;
  }
}
