import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';


const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: IndexComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      dashboardRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
