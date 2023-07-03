import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'home', loadChildren:()=> import("./home/home.module").then(mod=>mod.HomeModule)},
  {path:'view', loadChildren:()=> import("./view/view.module").then(mod=>mod.ViewModule)},
  {path:'cart', loadChildren:()=>import('./add-to-cart/add-to-cart.module').then(mod=>mod.AddToCartModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
