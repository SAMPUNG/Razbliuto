import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MysticComponent } from './mystic/mystic.component';
import { WelcomeComponent } from './welcome/welcome.component';


const homePageRoutes: Routes = [
  {
    path: 'homepage',
    component: WelcomeComponent,
    data: { title: 'Razbliuto' }
  },
  {
    path: 'mystic',
    component: MysticComponent,
    data: { title: 'Mystic' }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homePageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomepageRoutingModule { }
