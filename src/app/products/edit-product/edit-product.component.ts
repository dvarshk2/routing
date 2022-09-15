import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/data';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  singleProduct! : Iproduct | undefined;
  pName! : string | undefined;
  pStatus! : string | undefined;
  pId! : number | undefined;
  canNotEdit : boolean = false;
  constructor(private productService : ProductService, 
              private router : Router,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
                            .subscribe((queryParams : Params)=>{
                              console.log(queryParams);
                              
                              this.canNotEdit = queryParams['allowEdit'] ==='0' ? true : false;
                            })
    this.activatedRoute.params
                              .subscribe((params:Params)=>{
                                console.log(params);
                                this.pId =  +params['id'];   
                                this.singleProduct = this.productService.getSingleProduct(this.pId);                             
                              })
    // this.singleProduct = this.productService.getSingleProduct(1);
    console.log(this.singleProduct);
    this.pName = this.singleProduct?.pname;
    this.pStatus = this.singleProduct?.pStatus;
    this.pId = this.singleProduct?.pId;
  }
  onProductUpdate(){
    if(this.pId && this.pName && this.pStatus){
      this.productService.updatedProduct(this.pId, this.pName, this.pStatus);
      // this.router.navigate(['/products']);
      this.router.navigate(['../'], {relativeTo : this.activatedRoute, queryParamsHandling : 'preserve'})
    }
  }
}
