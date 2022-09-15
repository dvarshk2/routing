import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from '../shared/model/data';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsArr : Iproduct[] =[];
  constructor(private productService : ProductService, 
     
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.productsArr = this.productService.getProductsArr();
    console.log(this.productsArr);
    this.activatedRoute.params
                            .subscribe((params:Params)=>{
                              console.log(params);
                              
                              id : +params['id']
                            })

    
  }
  

}
