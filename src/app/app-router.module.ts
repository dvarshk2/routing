import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrMsgComponent } from "./err-msg/err-msg.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditProductComponent } from "./products/edit-product/edit-product.component";
import { ProductComponent } from "./products/product/product.component";
import { ProductsComponent } from "./products/products.component";
import { AuthGuardService } from "./shared/services/auth-guard.service";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes : Routes =[
    // {path : '', component : HomeComponent },// localhost:4200
    {path : '', redirectTo : '/home', pathMatch : 'full' },
    {path : 'home', component : HomeComponent },
    
    {path : 'users', canActivate:[AuthGuardService], component : UsersComponent, 
    children:[
      {path : ':id/:name', component : UserComponent}
    ]}, //localhost:4200/users
    // {path : 'products', canActivate:[AuthGuardService], //localhost:4200/products
    // component : ProductsComponent,
    //   children : [
    //   {path : ':id', component : ProductComponent},
    //   {path : ':id/edit', component : EditProductComponent}
    //   ]
    // },
    // {path : 'products',  //localhost:4200/products
    // component : ProductsComponent,
    //   children : [
    //   {path : ':id', canActivate:[AuthGuardService], component : ProductComponent},
    //   {path : ':id/edit', canActivate:[AuthGuardService], component : EditProductComponent}
    //   ]
    // },
    {path : 'products',  canActivateChild:[AuthGuardService],  //localhost:4200/products
    component : ProductsComponent,
      children : [
      {path : ':id',  component : ProductComponent},
      {path : ':id/edit', component : EditProductComponent}
      ]
    },
    // {path:'page-not-found', component: PageNotFoundComponent},
    {path:'page-not-found', component: ErrMsgComponent, data: {msg : 'page-not-found........Error!!!'}},
    {path:'product-not-found', component: ErrMsgComponent, data: {msg : 'product-not-found...@@@.Error!!!'}},
    {path:'**', redirectTo : '/page-not-found'}//wild card>> anything
  ];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule // using RouterModule in app-router-module so need to export used module
        // i.e. RouterModule
    ]
})
export class AppRouterModule{
   
}