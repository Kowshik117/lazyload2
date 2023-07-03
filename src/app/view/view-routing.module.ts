import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailviewComponent } from './detailview/detailview.component';
import { SmileComponent } from './smile/smile.component';

const routes: Routes = [
  {path:'', component:DetailviewComponent},
  {path: 'smile', component: SmileComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
