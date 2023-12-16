import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddeditComponent } from './product-addedit/product-addedit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductViewComponent, ProductListComponent, ProductAddeditComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule { }
