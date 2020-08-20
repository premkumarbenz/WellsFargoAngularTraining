import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HelloComponent} from './hello/hello.component';
import {DataBindingComponent} from './data-binding/data-binding.component';

import {CustomersModule} from './customers/customers.module';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, SearchComponent
  ],
  imports: [
    BrowserModule, FormsModule, CustomersModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
