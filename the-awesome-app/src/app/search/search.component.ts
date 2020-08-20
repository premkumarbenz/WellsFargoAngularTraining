import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';
import {take, tap, filter, map, debounceTime} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFormGroup: FormGroup;
  constructor() { 

           let obs =  interval(1000);
           obs = obs.pipe(
              take(10),
              tap(n => console.log("tap: ", n)),
              filter(n => n % 2 == 0),
              map(n => n * n)
           );
          //  obs.subscribe((result) => {
          //     console.log("subscriber: ", result);
          //  });
  }

  ngOnInit(): void {

    this.searchFormGroup = new FormGroup({
      search: new FormControl("", [Validators.required, Validators.minLength(2)], [])
    });

    const search = this.searchFormGroup.get('search');
    // this.searchFormGroup
    //         .get("search")
    //         .valueChanges
    //         .pipe(
    //           filter(v => this.searchFormGroup.get('search').valid)
    //         )
    //         .subscribe(value => {
    //           console.log(value);
    //         })

            search
            .valueChanges
            .pipe(
              filter(v => search.valid),
              debounceTime(1000)
            )
            .subscribe(value => {
              console.log(value);
            })
  }

}
