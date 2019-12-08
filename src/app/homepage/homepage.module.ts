import { NgModule } from '@angular/core';

// Module
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
    SharedModule,

    HomepageRoutingModule      // Routing
  ],
  providers: [
  ],
  exports: [
  ]
})
export class HomepageModule { }
