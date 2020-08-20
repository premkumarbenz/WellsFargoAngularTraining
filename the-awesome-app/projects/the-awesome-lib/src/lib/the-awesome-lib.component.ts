import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-the-awesome-lib',
  template: `
    <p>
      the-awesome-lib works!
    </p>
  `,
  styles: [
  ]
})
export class TheAwesomeLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
