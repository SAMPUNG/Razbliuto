import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { IndexComponent } from './index/index.component';

import { SharedModule } from '../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,

    SharedModule,

    NgxChartsModule,
    NgxGraphModule,

    DashboardRoutingModule
  ]
})
export class DashboardModule { }
