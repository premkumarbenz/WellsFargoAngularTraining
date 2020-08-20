import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { FormsModule } from '@angular/forms';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustFilterPipe } from './cust-filter.pipe';
import {DataService} from './data.service';
import {IDataService} from './idata-service';
import {RouterModule, Routes} from '@angular/router';
import { DetailsComponent } from './details/details.component';
import {TableModule} from 'primeng/table';

const routes: Routes = [
  {path: "customers", component: ListCustomersComponent},
  {path: "customers/:id", component: DetailsComponent}
]

@NgModule({
  declarations: [ListCustomersComponent, EditCustomerComponent, CustFilterPipe, DetailsComponent],
  imports: [
    CommonModule, HttpClientModule, FormsModule, RouterModule.forChild(routes), TableModule
  ],
  exports: [ListCustomersComponent],
  providers: [{provide: IDataService, useClass: DataService}]
})
export class CustomersModule { }
