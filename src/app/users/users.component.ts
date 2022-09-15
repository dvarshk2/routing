import { Component, OnInit } from '@angular/core';
import { Iusers } from '../shared/model/data';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users : Iusers[] = [];
  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUser();
    console.log(this.users);
    
  }

}
