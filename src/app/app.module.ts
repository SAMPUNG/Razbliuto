import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// App
import { AppComponent } from './app.component';

// Module
import { DashboardModule } from './dashboard/dashboard.module';
import { HomepageModule } from './homepage/homepage.module';
import { SharedModule } from './shared/shared.module';

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

      DashboardModule,           // Module: Dashboard
      HomepageModule,            //       : Homepage
      SharedModule,              //       : Shared

      SharedRoutingModule,       // Routing
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
