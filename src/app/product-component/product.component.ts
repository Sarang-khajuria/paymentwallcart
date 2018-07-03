import { Component, OnInit } from '@angular/core';
import {ObservableService} from '../observable.service';
import {Subscription} from "rxjs/Subscription"; 
import {Observable} from 'rxjs/RX';


@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private  observableService:ObservableService) { }
  currency:string = "USD";
  products:Array<Object>;
  imagesArray:Array<String>;

  ngOnInit() {
    this.products = this.sampleJSONData();
    this.imagesArray = this.imageUrls();
  }

  sampleJSONData(){
    //We can make a call to backend here for data
    let data =  [
      {
        name: "Amazon",
        price: 80,
      },
      {
        name: "Flipkart",
        price:50
      },
      {
        name:"Snapdeal",
        price: 30
      }
    ]

    return data;
  }

  imageUrls(){
    let imgarr  =[
      "assets/images/amazon.png","assets/images/flipkart.jpg","assets/images/snapdeal.png"
    ]
    return imgarr;
  }

  addToCart(name,price){
    this.observableService.sendMessageToCart([name,price]);
  } 

}
