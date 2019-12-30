import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// App
import { AppComponent } from './app.component';

// Module
import { AdminModule } from './admin/admin.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomepageModule } from './homepage/homepage.module';

// Routing
import { SharedRoutingModule } from './shared/shared-routing.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,

      AdminModule,               // Module: Admin
      DashboardModule,           //       : Dashboard
      HomepageModule,            //       : Homepage

      SharedRoutingModule,       // Routing
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
