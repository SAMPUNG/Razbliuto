import { NgModule } from '@angular/core';

import { HighchartsChartModule } from 'highcharts-angular';

import { SharedModule } from '../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { IndexComponent } from './index/index.component';
import { PokerComponent } from './poker/poker.component';



@NgModule({
  declarations: [
    IndexComponent,
    PokerComponent
  ],
  imports: [
    HighchartsChartModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
