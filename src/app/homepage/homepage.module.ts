import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Portal
import { PortalModule } from '@angular/cdk/portal';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Design: Layout
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
//                : Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
//                : Buttons & Indicators
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
//                : Form Controls
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';

// Components
import { HomepageComponent } from './homepage.component';
import { MysticComponent } from './mystic/mystic.component';
import { WelcomeComponent } from './welcome/welcome.component';

// Routing
import { HomepageRoutingModule } from './homepage-routing.module';
import { NavComponent } from './nav/nav.component';
import { SiderComponent } from './sider/sider.component';

@NgModule({
  declarations: [
    HomepageComponent,
    MysticComponent,
    WelcomeComponent,
    NavComponent,
    SiderComponent,
  ],
  imports: [
    CommonModule,
    PortalModule,              // Portal
    FormsModule,               // Angular Form
    ReactiveFormsModule,
    MatExpansionModule,        // Material Design: Layout
    MatListModule,
    MatMenuModule,             //                : Navigation
    MatSidenavModule,
    MatToolbarModule,
    MatBadgeModule,            //                : Buttons & Indicators
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,        //                : Form Controls
    MatInputModule,

    SharedModule,

    HomepageRoutingModule      // Routing
  ],
  providers: [
    MatExpansionModule,        // Material Design: Layout
    MatListModule,
    MatMenuModule,             //                : Navigation
    MatSidenavModule,
    MatToolbarModule,
    MatBadgeModule,            //                : Buttons & Indicators
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,        //                : Form Controls
    MatInputModule,
  ],
  exports: [
    MysticComponent
  ]
})
export class HomepageModule { }
