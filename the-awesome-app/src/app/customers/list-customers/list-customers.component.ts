import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer'
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  data: Array<Customer>;
  customer: Customer = new Customer();
  url: string;

  constructor(private httpClient: HttpClient) { 

      this.data = new Array<Customer>();
      this.url = "https://calm-beach-18228.herokuapp.com/customers";
      // this.data.push(new Customer(1, "Reliance", "Mumbai"));
      // this.data.push(new Customer(2, "Infosys", "Bangalore"));
      // this.data.push(new Customer(3, "Apple", "Hyderabad"));
  }

  ngOnInit(): void {

     ///var httpClient = new HttpClient();
     //var url = "https://calm-beach-18228.herokuapp.com/customers";
     this.httpClient
              .get<Array<Customer>>(this.url)
              .subscribe((data) => {
                  console.log(data);
                  this.data = data;
              })


  }
  save(){

    this.httpClient
          .post(this.url, this.customer)
          .subscribe(() => {
              
              alert("saved");
              this.data.push(this.customer);
              this.customer = new Customer();

          }, () => {
              alert("Failed");
          })
  }

}
