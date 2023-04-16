import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  interval$: Subscription;
  value = 0
  
  constructor() { }

  ngOnInit() {
    this.interval$ =  interval(1000).subscribe(value => {
      this.value++
      console.log(this.value)
    })
   }
 
   ngOnDestroy() {
     this.interval$.unsubscribe()
     console.log('destroyed')
   }

}