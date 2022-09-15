import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { Iproduct } from 'src/app/shared/model/data';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 singleProduct! : Iproduct | undefined;
activeId:number = 1 ;
  constructor(private productService : ProductService,
    private router :Router,
    private activatedRoute : ActivatedRoute) { }
    
    ngOnInit(): void {
      // console.log(this.singleProduct);
      this.activatedRoute.params      
                            .subscribe((params: Params)=>{
                              // console.log(params);                              
                             this.activeId = +params['id'];                             
                              this.singleProduct = this.productService.getSingleProduct(this.activeId);
                              // console.log(this.singleProduct);                              
                          })
  }
  onEditProduct(){
    // this.router.navigate(['/products', this.activeId, 'edit'], {relativeTo:this.activatedRoute});
    this.router.navigate(['edit'], {relativeTo:this.activatedRoute, 
      queryParamsHandling: 'preserve'});
  }
  
}
