import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { IndexComponent } from './index/index.component';

import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,

    NgxChartsModule,
    NgxGraphModule,

    DashboardRoutingModule
  ]
})
export class DashboardModule { }
