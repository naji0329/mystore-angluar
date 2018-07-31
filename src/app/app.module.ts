import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { StockComponent } from './example/stock/stock.component';
import { SincePipe } from './pipes/since.pipe';
import { AsyncPipeComponent } from './example/async-pipe/async-pipe.component';
import { WriterComponent } from './example/components/writer/writer.component';
import { ReaderComponent } from './example/components/reader/reader.component';
import { CommunicationComponent } from './example/components/communication/communication.component';
import { ToggleComponent } from './example/components/toggle/toggle.component';
import { TogglecontainerComponent } from './example/components/togglecontainer/togglecontainer.component';

@NgModule({
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    FlexLayoutModule,
    MomentModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule
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
    StockComponent,
    SincePipe,
    AsyncPipeComponent,
    WriterComponent,
    ReaderComponent,
    CommunicationComponent,
    ToggleComponent,
    TogglecontainerComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
