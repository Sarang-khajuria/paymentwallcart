import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/RX';
import {Subject} from 'rxjs/Subject'

@Injectable()
export class ObservableService {

  subjectCart = new Subject<any>();
  constructor() { }

   sendMessageToCart(message: Array<object>){
    this.subjectCart.next({
      name: message[0],
      price:message[1]
    })
   }

   getMessageCart(): Observable<any> {
    return this.subjectCart.asObservable();
   }
}
