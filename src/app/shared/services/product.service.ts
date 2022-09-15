import { Injectable } from '@angular/core';
import { Iproduct } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsArr : Iproduct[] =[
    {
      pname: 'SAMSUNG Mobile',
      pStatus: 'In Progress',
      pId: 1
    },
    {
      pname:'Samsung TV',
      pStatus : 'Dispatched',
      pId: 2,
    },
    {
      pname:'MacBook',
      pStatus : 'Delivered',
      pId :3,
    }
  ]
  constructor() { }
  getProductsArr(){
    return this.productsArr;
  }
  getSingleProduct(id : number){
    return this.productsArr.find(ele => ele.pId === id)
  }
  updatedProduct(id : number, pName: string, pstatus : string){
    this.productsArr.forEach(ele => {
      if (ele.pId === id){
        ele.pname = pName;
        ele.pStatus = pstatus;
      }
    })
  }
}

