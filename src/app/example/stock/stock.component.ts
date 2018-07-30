import { Component, OnInit } from '@angular/core';
import { StockPriceService } from '../../service/stock-price.service';

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stockPriceService:any;
  stock:object;
  constructor(stockPriceService: StockPriceService) {
    this.stockPriceService = stockPriceService;
   }

  ngOnInit() {
  }
  public subscribeTimer() {
    this.stockPriceService.stockPriceObserver.subscribe(x => {
      this.stock = x;
    }, onError => { }, () => {
      console.log('Complete');
    })
  }
}
