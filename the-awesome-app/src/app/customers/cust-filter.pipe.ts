import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './model/customer';

@Pipe({
  name: 'custFilter'
})
export class CustFilterPipe implements PipeTransform {

  transform(data: Array<Customer>, searchKey: string): Array<Customer> {
    
    if(!searchKey){
      return data;
    }
    else{

        return data.filter(item => 
              item.id.toString() == searchKey 
              || item.name.toLowerCase().includes(searchKey.toLowerCase()) 
              || item.location.toLowerCase().includes(searchKey.toLowerCase()));

    }
    //return null;


  }

}
