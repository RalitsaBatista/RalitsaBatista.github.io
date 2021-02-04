import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/productList', pathMatch: 'full'},
  {path: 'productList' , component: ProductListComponent},
  {path: 'productList/:id/:name', component : ProductListComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductListComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
