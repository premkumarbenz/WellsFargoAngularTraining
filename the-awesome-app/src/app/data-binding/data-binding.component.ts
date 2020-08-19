import {Component} from '@angular/core';


@Component({
    selector: "data-binding",
    templateUrl: "./data-binding.component.html"
})
export class DataBindingComponent{

    user: {firstName: string, lastName: string};
    count: number;
    message: string;
    showPanel: boolean;

    constructor(){
        this.user = {firstName: "Anil", lastName: "Joseph"}
        this.count = 10;
        this.message = "Hello";
        this.showPanel = false;
    }

    inc(msg, evt){
        console.log("in inc...", msg, evt)
        this.count++;
    }

}