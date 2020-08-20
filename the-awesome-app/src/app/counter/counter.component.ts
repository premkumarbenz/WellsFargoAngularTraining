import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter: number;
  constructor(private store: Store<{state: AppState}>) {

      this.store.pipe(select('state')).subscribe((data) => {
          this.counter = data.count;
      })
   }

  ngOnInit(): void {
  }

  inc(){
    this.store.dispatch({type: "INC_CTR"});
  }

  decr(){
    this.store.dispatch({type: "DECR_CTR"});
  }

}
