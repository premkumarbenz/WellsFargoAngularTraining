import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HelloComponent} from './hello/hello.component';
import {DataBindingComponent} from './data-binding/data-binding.component';

import {CustomersModule} from './customers/customers.module';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {AuthGuardService} from './guards/auth-guard.service';
import {TheAwesomeLibModule, TheAwesomeLibComponent} from 'the-awesome-lib';

const routes: Routes = [
  {path: "", component: HelloComponent},
  {path: "binding", component: DataBindingComponent, canActivate: [AuthGuardService]},
  {path: "search", component: SearchComponent, canActivate: [AuthGuardService]},
  {path: "login", component: LoginComponent},
  {path: "lib", component: TheAwesomeLibComponent}
]

@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, SearchComponent, LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, CustomersModule, 
      ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes),TheAwesomeLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
