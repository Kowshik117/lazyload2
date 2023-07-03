import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from '../addToCart/add-to-cart/add-to-cart.component';

const routes: Routes = [
  {
    path: '', component: AddToCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddToCartRoutingModule { }
