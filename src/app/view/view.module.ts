import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { DetailviewComponent } from './detailview/detailview.component';
import { SmileComponent } from './smile/smile.component';


@NgModule({
  declarations: [
    DetailviewComponent,
    SmileComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
