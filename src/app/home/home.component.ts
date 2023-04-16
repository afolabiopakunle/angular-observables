import { Component, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  interval$: Subscription;
  value = 0
  primaryObservable;
  i = 0;
  constructor() { }

  ngOnInit() {
    this.primaryObservable = new Observable((obs) => {
      setInterval(() => {
        obs.next(this.i); 
        this.i++
      }, 1000)
    });

    // this.interval$ = this.primaryObservable.subscribe((res) => {
    //   console.log(res)
    // })
   }
 
   ngOnDestroy() {
      // this.interval$.unsubscribe();
      // console.log('destroyyed')
   }

}