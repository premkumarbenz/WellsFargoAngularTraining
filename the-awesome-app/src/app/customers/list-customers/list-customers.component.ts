import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer'

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  data: Array<Customer>;
  constructor() { 

      this.data = new Array<Customer>();
      this.data.push(new Customer(1, "Reliance", "Mumbai"));
      this.data.push(new Customer(2, "Infosys", "Bangalore"));
      this.data.push(new Customer(3, "Apple", "Hyderabad"));
  }

  ngOnInit(): void {
  }

}
