import { Component, EventEmitter, Output } from '@angular/core';
import * as productData from '../user.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
products = productData;
@Output() productDetail :EventEmitter<any> =new EventEmitter<any>();
constructor(){

}
passData(product:any){
  this.productDetail.emit(product);
}
}
