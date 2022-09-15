import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  // onLoadProducts(){
  //   this.router.navigate(['products']); // here it takes abs only
  // }
  onLoadProduct(id : number){
    // this.router.navigate(['products', id, 'edit']); // here it takes abs only
    this.router.navigate(['products', id]); 
  }
  onUsers(id : number){
    // this.router.navigate(['users', id, 'user'])
    this.router.navigate(['users'])
  }
}
