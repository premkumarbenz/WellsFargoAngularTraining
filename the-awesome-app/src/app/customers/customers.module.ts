import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListCustomersComponent],
  imports: [
    CommonModule, HttpClientModule, FormsModule
  ],
  exports: [ListCustomersComponent]
})
export class CustomersModule { }
