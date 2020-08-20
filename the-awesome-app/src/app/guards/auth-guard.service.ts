import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    
      const isAuth = sessionStorage.getItem("isAuth");
      if(isAuth){
          return true;
      }
      else{

        const url = state.url;
        this.router.navigate(["/login"], {queryParams: {returnUrl: url}});
        return false;
      }
  }
}
