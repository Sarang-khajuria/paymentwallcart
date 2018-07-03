import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ObservableService } from './observable.service';
import { AppComponent } from './app.component';
import { CartComponent } from './cart-component/cart.component';
import { ProductComponent } from './product-component/product.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ObservableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
