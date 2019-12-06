import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatListModule,               // Material Design: Layout
  MatGridListModule,
  MatStepperModule,
  MatDividerModule,
  MatExpansionModule,
  MatToolbarModule,            //                : Navigation
  MatMenuModule,
  MatSidenavModule,
  MatButtonModule,             //                : Buttons & Indicators
  MatIconModule,
  MatRippleModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatChipsModule,
  MatBadgeModule,
  MatBottomSheetModule,        //                : Popups & Modals
  MatSnackBarModule,
  MatFormFieldModule,          //                : Form Controls
  MatInputModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,

  MAT_SNACK_BAR_DEFAULT_OPTIONS
} from '@angular/material';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { PortalModule } from '@angular/cdk/portal';

import { MarkdownModule } from 'ngx-markdown';

import { MessageComponent } from './message/message.component';
import { MessageService } from './message/message.service';
import { GridComponent } from './grid/grid.component';
import { GridFormComponent } from './grid/grid-form/grid-form.component';
import { GridNavComponent } from './grid/grid-nav/grid-nav.component';
import { GridBodyComponent } from './grid/grid-body/grid-body.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    MessageComponent,
    GridComponent,
    GridFormComponent,
    GridNavComponent,
    GridBodyComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,          // HTTP
    FormsModule,               // Angular Form
    ReactiveFormsModule,
    MatListModule,             // Material Design: Layout
    MatGridListModule,
    MatStepperModule,
    MatDividerModule,
    MatExpansionModule,
    MatToolbarModule,          //                : Navigation
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,           //                : Buttons & Indicators
    MatIconModule,
    MatRippleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatBadgeModule,
    MatBottomSheetModule,      //                : Popups & Modals
    MatSnackBarModule,
    MatFormFieldModule,        //                : Form Controls
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    PortalModule,              // Portal

    MarkdownModule.forRoot({   // Markdown
      loader: HttpClient
    }),
  ],
  providers: [
    MatListModule,             //                : Layout
    MatGridListModule,
    MatStepperModule,
    MatDividerModule,
    MatExpansionModule,
    MatToolbarModule,          //                : Navigation
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,           //                : Buttons & Indicators
    MatIconModule,
    MatRippleModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatBadgeModule,
    MatBottomSheetModule,      //                : Popups & Modals
    MatSnackBarModule,
    MatFormFieldModule,        //                : Form Controls
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,

    {                          //                : SnackBar Configure
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    },
    {                          // Stepper Configure
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {
        displayDefaultIndicatorType: false,
        showError: true
      }
    }
  ],
  entryComponents: [
    MessageComponent
  ],
  exports: [
    MessageService
  ]
})
export class SharedModule { }
