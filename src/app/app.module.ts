import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from './app-router.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsersComponent,
    HomeComponent,
    ProductsComponent,
    UserComponent,
    EditProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule // aap-routing-module registration mandatory
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
