import { NgModule } from '@angular/core';

// Module
import { SharedModule } from '../shared/shared.module';

// Components
import { HomepageComponent } from './homepage.component';
import { MysticComponent } from './mystic/mystic.component';
import { NavComponent } from './nav/nav.component';
import { SiderComponent } from './sider/sider.component';
import { WelcomeComponent } from './welcome/welcome.component';

// Routing
import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
  declarations: [
    HomepageComponent,
    MysticComponent,
    NavComponent,
    SiderComponent,
    WelcomeComponent,
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
