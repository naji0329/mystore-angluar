import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionTimerService } from '../service/session-timer.service';

@Component({
  selector: 'session-timer',
  templateUrl: './session-timer.component.html',
  styleUrls: ['./session-timer.component.css']
})
export class SessionTimerComponent implements OnInit {
  timer: Observable<Date>;
  time: Date;
  constructor(public sessionTimerService: SessionTimerService) { }

  ngOnInit() {
    this.sessionTimerService.intervalObserver.subscribe(x => {
      this.time = x;
    }, onError => { }, () => {
      console.log('Complete');
    })
  }

  ngOnDestroy() {
    console.log('dispose');
  }

}
