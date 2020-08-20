import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  returnUrl: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 

      this.activatedRoute.queryParams.subscribe((data) => {
        this.returnUrl = data.returnUrl || "/";
      })
  }
  login(){

    if(this.username === "abc" && this.password === "abc"){

        sessionStorage.setItem("isAuth", "true");
        //this.router.navigate(["/"]);
        this.router.navigate([this.returnUrl]);
    }
    else{

      sessionStorage.removeItem("isAuth");
      alert("Login Failed");
    }
  }
  ngOnInit(): void {
  }

}
