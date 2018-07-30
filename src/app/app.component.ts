import { Component } from '@angular/core';
import { StoreCartService } from './service/store-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public storeCartService: StoreCartService) {
    this.storeCartService = storeCartService;
  }
}
