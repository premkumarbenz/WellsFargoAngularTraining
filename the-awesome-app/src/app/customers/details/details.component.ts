import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  custId: number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location) { 

    this.activatedRoute.params.subscribe(data => {
      this.custId = data.id;
    });
  }

  ngOnInit(): void {
  }

  back(){
    // /customers/account/10
    //this.router.navigate(["/customers"]);
    this.location.back();
  }

}
