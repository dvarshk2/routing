import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  loggedIn : boolean = false;
  constructor() { }

  logIn(){
    //http call for log in
    this.loggedIn = true;
  }

  logOut(){
    this.loggedIn = false;
  }

  isAuthenticated(){
    return new Promise((resolve, reject) => { // async behaviour
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    })
  }
}
