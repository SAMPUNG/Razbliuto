import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage.component';
import { MysticComponent } from './mystic/mystic.component';
import { WelcomeComponent } from './welcome/welcome.component';


const homePageRoutes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'mystic',
        component: MysticComponent,
        data: { title: 'Mystic' }
      }
    ],
    data: { title: 'Razbliuto' }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(homePageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomepageRoutingModule {
}
