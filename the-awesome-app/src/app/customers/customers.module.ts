import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { FormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustFilterPipe } from './cust-filter.pipe';
import {DataService} from './data.service';
import {IDataService} from './idata-service';


@NgModule({
  declarations: [ListCustomersComponent, EditCustomerComponent, CustFilterPipe],
  imports: [
    CommonModule, HttpClientModule, FormsModule
  ],
  exports: [ListCustomersComponent],
  providers: [{provide: IDataService, useClass: DataService}]
})
export class CustomersModule { }
