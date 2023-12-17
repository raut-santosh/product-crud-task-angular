import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductViewComponent} from './product-view/product-view.component';
import {ProductAddeditComponent} from './product-addedit/product-addedit.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'detail/:id', component: ProductViewComponent },
  { path: 'addedit', component: ProductAddeditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
