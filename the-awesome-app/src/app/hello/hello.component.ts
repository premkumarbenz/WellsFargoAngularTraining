import {Component} from '@angular/core';


// <hello></hello>
@Component({
    selector: "hello",
    template: `
        <div>
            <h2>Hello Component</h2>
            <p>This is a simple component</p>
            <p>Generated Date: {{createdDate.toDateString()}}</p>
            <p>Generated Time: {{createdDate.toTimeString()}}</p>
        </div>
    `
})
export class HelloComponent{

    createdDate: Date;

    constructor(){
        this.createdDate = new Date();
    }
}