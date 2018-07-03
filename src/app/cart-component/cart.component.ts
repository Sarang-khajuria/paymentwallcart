import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Subscription } from "rxjs/Rx";
import {ObservableService} from '../observable.service';


export interface ProductInterface {
  name: string;
  price: number;
  quantity: number;
}


@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private  observableService:ObservableService) { }
  startCount:number = 0;
  isOrderPresent:Boolean = false;
  subscription:Subscription;
  cartArray:Array<ProductInterface> = [];
  currency:string = "USD";
  
  ngOnInit() {
    this.subscription = this.observableService.getMessageCart().subscribe(cartModification => {
      let newElem = true;
      for(let i = 0;i<this.cartArray.length;i++){
        if(this.cartArray[i].name == cartModification.name){
          this.cartArray[i].quantity = this.cartArray[i].quantity + 1;
          newElem = false;
          break;
        }
      }
      if(newElem == true){
        let cartInfo = {
          name: cartModification.name,
          price: cartModification.price,
          quantity:1
        }
        this.cartArray.push(cartInfo);
        this.isOrderPresent = true;
      }      
    });
  }
  totalAmount(){
    let amount  = this.cartArray.map(sum=> sum.price*sum.quantity);
    let totalAmount = amount.reduce((accum,obj)=>accum + obj);
    return "Total Amouunt:" + ' ' + totalAmount + ' '  + this.currency;
  }

  reduceQuantity(quantity,index){
    if(quantity <= 0 ){
      return;
    }
    this.cartArray[index].quantity= this.cartArray[index].quantity -1;
  }

  increaseQuantity(quantity,index){
    this.cartArray[index].quantity= this.cartArray[index].quantity +1;
  }

  removeProduct(product:ProductInterface,index){
    this.cartArray.splice(index,1);
  }

}
