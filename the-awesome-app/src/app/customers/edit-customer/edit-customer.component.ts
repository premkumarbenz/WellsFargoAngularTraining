import { Component, OnInit, Input , OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit, OnChanges {

  @Input()
  current: Customer;
  @Output()
  saved: EventEmitter<Customer> = new EventEmitter<Customer>();
  @Output()
  cancelled: EventEmitter<string> = new EventEmitter<string>();

  //copy of current
  temp: Customer;

  constructor() {
    //console.log("constructor");
   }

  ngOnChanges(changes: SimpleChanges): void {
    
    //console.log("ngOnChanges", changes);
    this.temp = new Customer();
    Object.assign(this.temp, this.current);
  }

  ngOnInit(): void {
    //console.log("ngOnInit");
  }

  save(){
    this.saved.emit(this.temp);
  }

  cancel(){
    this.cancelled.emit("Task cancelled");
  }
}
