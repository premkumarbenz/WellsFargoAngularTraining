 import { Injectable } from '@angular/core';

import { IDataService } from './idata-service';
import { HttpClient } from '@angular/common/http';


// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class DataService extends IDataService{

  constructor(private httpClient : HttpClient) {
    super()
   }

  sayHello(msg: string): string{
    return "Hello " + msg;
  }
}
