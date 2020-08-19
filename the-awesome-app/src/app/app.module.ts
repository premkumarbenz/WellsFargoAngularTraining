import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HelloComponent} from './hello/hello.component';
import {DataBindingComponent} from './data-binding/data-binding.component';

import {CustomersModule} from './customers/customers.module';

@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent
  ],
  imports: [
    BrowserModule, FormsModule, CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
