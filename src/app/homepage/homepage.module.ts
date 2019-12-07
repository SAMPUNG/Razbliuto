import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Portal
import { PortalModule } from '@angular/cdk/portal';

// Material Design: Buttons & Indicators
import { MatChipsModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';

import { MysticComponent } from './mystic/mystic.component';
import { WelcomeComponent } from './welcome/welcome.component';

// Routing
import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
  declarations: [
    MysticComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    PortalModule,         // Portal
    MatChipsModule,       // Material Design: Buttons & Indicators
    SharedModule,

    HomepageRoutingModule // Routing
  ],
  providers: [
    MatChipsModule,       // Material Design: Buttons & Indicators
  ],
  exports: [
    MysticComponent
  ]
})
export class HomepageModule { }
