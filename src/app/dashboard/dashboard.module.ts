import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule,

    SharedModule,

    DashboardRoutingModule
  ]
})
export class DashboardModule { }
