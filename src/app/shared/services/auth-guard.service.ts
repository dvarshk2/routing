import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild{

  constructor(private authService: AuthServiceService,
              private router : Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : boolean | Observable<boolean> | Promise<boolean> {
  //  return true
  return   this.authService.isAuthenticated()
                                .then((authState)=>{
                                  if(authState === true){
                                    return true;
                                  }else{
                                    this.router.navigate([''])
                                    return false;
                                  }
                                })
                                .catch()
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.isAuthenticated() // returns promise
                                .then((authState)=> {
                                  if(authState){
                                    return true;
                                  }else{
                                    this.router.navigate(['/'])
                                    return false;
                                  }
                                })

  }

}
