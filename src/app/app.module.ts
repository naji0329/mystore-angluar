import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home-component';
import { RoutingModule } from './app.routing';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { HighlightDirective } from './common/highlight.directive';
import { SessionTimerComponent } from './session-timer/session-timer.component';
import { ExampleComponent } from './example/example.component';
import { MomentModule }  from 'ngx-moment';
import { ObservableComponent } from './example/observable/observable.component';
import { StockComponent } from './example/stock/stock.component';

@NgModule({
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    FlexLayoutModule,
    MomentModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent,
    CartComponent,
    HighlightDirective,
    SessionTimerComponent,
    ExampleComponent,
    ObservableComponent,
    StockComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
