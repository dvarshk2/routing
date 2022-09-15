import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iusers } from 'src/app/shared/model/data';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  user! : Iusers;
  constructor(private usersService : UsersService, 
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    // this.singleuser = this.usersService.getSingleUser(1);
    console.log(this.activatedRoute.snapshot.params);
    
    this.user = {
      id : this.activatedRoute.snapshot.params['id'], 
      name : this.activatedRoute.snapshot.params['name']
    }
    console.log(this.activatedRoute.params);    //Observable
    
    this.activatedRoute.params  
                        .subscribe(
                          (myParams : Params)=> {
                            console.log(myParams);                            
                            this.user = {
                              id : +myParams['id'],
                              name : myParams['name']
                            }
                          }
                        )    
  }

}
