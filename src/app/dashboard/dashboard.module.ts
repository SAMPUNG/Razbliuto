import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { IndexComponent } from './index/index.component';
import { NumberCardsComponent } from './number-cards/number-cards.component';



@NgModule({
  declarations: [
    IndexComponent,
    NumberCardsComponent
  ],
  imports: [
    CommonModule,

    SharedModule,

    DashboardRoutingModule
  ]
})
export class DashboardModule { }
