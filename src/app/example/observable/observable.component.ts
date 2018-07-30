import { Component, OnInit } from '@angular/core';
import { SessionTimerService } from '../../service/session-timer.service';
import { StockPriceService } from '../../service/stock-price.service';

@Component({
  selector: 'observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  stockPriceService:any;
  stock:object;
  constructor(stockPriceService: StockPriceService) {
    this.stockPriceService = stockPriceService;
   }

  ngOnInit() {
    this.subscribeTimer();
  }
  public subscribeTimer() {
    this.stockPriceService.stockPriceObserver.subscribe(x => {
      this.stock = x;
    }, onError => { }, () => {
      console.log('Complete');
    })
  }
}
