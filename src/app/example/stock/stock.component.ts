import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { StockPriceService } from '../services/stock-price.service';

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.stockSubscription.unsubscribe();
  }
  stockPriceService: any;
  hotObservableService: any;
  stock: object;
  stockSubscription:any;

  @Input()
  type: string;
  constructor(stockPriceService: StockPriceService) {
    this.stockPriceService = stockPriceService;
  }

  ngOnInit() {
  }
  public subscribeStock() {
    this.stockSubscription = this.stockPriceService.stockPriceObserver.subscribe(x => {
      this.stock = x;
    }, onError => { }, () => {
      console.log('Complete');
    });
  }

  public unsubscribeStock() {
    this.stockSubscription.unsubscribe();
  }
}
