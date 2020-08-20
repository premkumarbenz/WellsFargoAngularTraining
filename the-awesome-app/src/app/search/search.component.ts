import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take, tap, filter, map, debounceTime } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchFormGroup: FormGroup;
  results: Array<string>;
  observableResults: Observable<Array<string>>;

  constructor(private http: HttpClient) {

    let obs = interval(1000);
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
        debounceTime(1000),
        filter(v => search.valid),

      )
      .subscribe(value => {
        console.log(value);

        const url = "https://en.wikipedia.org/w/api.php";

        const httpParams = new HttpParams()
          .set("action", "opensearch")
          .set("limit", "20")
          .set("origin", "*")
          .set("search", value);

        // this.http
        //       .get(url, {params: httpParams})
        //       .subscribe((data) => {
        //         console.log(data)
        //       });

        // this.http
        //   .get(url, { params: httpParams, observe: 'response' })
        //   .subscribe((resp) => {
        //     console.log(resp);
        //     console.log(resp.body);
        //     console.log(resp.status);
        //     //console.log(resp.headers[]);
        //   });

        // this.http
        //   .get(url, { params: httpParams, observe: 'body' })
        //   .pipe(
        //     map(data => data[1])
        //   )
        //   .subscribe((data) => {
        //     console.log(data);
        //     this.results = data;
           
        //   });

        this.observableResults =  this.http
                                  .get(url, { params: httpParams, observe: 'body' })
                                  .pipe(
                                    map(data => data[1])
                                  );
         
      })
  }

}
