import { Component, OnInit } from '@angular/core';
import { StoreCartService } from '../service/store-cart.service';
import { Product } from '../model/product';
import * as _ from 'lodash';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  cartSum: number = 0;
  constructor(private storeCartService: StoreCartService) { }

  ngOnInit() {
    console.log('initializing cart component');
    this.products = this.storeCartService.getCartItems();
    this.cartSum = _.sumBy(this.products, 'attributes.price');
  }

}
