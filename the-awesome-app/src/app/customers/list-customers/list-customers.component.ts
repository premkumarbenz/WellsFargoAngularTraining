import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer'
import {HttpClient} from '@angular/common/http';
//import {DataService} from '../data.service';
import {IDataService} from '../idata-service';
@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  data: Array<Customer>;
  customer: Customer = new Customer();
  url: string;
  selectedCustomer: Customer= null;
  searchKey: string = "";

  constructor(private httpClient: HttpClient, private dataService: IDataService) { 

      console.log("Data Servive: ", dataService.sayHello("services"));
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

  edit(cust){
      this.selectedCustomer = cust;
      //console.log(this.selectedCustomer);
  }

  editUpdate(updatedCustomer){

    //alert("updated");

    const index = this.data.findIndex(item => item.id === updatedCustomer.id);
    this.data[index] = updatedCustomer;
    this.selectedCustomer = null;

  }
  editCancelled(msg){
   // alert("cancelled");
    this.selectedCustomer = null;

  }
}
