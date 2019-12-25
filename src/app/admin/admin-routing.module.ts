import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorizeComponent } from './authorize/authorize.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


const adminRoutes: Routes = [
  {
    path: 'authorize',
    component: AuthorizeComponent
  }, {
    path: 'login',
    component: RegisterComponent,
    data: { type: 'login' }
  }, {
    path: 'profile',
    component: ProfileComponent
  }, {
    path: 'register',
    component: RegisterComponent,
    data: { type: 'register' }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      adminRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
