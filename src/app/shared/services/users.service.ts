import { Injectable } from '@angular/core';
import { Iusers } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users : Iusers[] = [
    {
      id: 1,
      name : 'John'
    },
    {
      id : 2,
      name: 'July'
    },
    {
      id : 3,
      name : 'James',
    }
  ]
  constructor() { }
  getUser(){
    return this.users;
  }
  getSingleUser(id : number){
    return this.users.find(ele => ele.id === id);
  }
}
