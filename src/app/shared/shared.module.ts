import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// HTTP
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Portal
import { PortalModule } from '@angular/cdk/portal';

// Material Design: Navigation
import { MatToolbarModule } from '@angular/material/toolbar';
//                : Buttons & Indicators
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatRippleModule } from '@angular/material';
//                : Popups & Modals
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
//                : Form Controls
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
//                : Data Table
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

// Markdown : NGX-Markdown
import { MarkdownModule } from 'ngx-markdown';
// Pdf      : NG2-PDF-Viewer
import { PdfViewerModule } from 'ng2-pdf-viewer';
// Rich Text: CKEditor5
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// DIY: Components & Services
import { ArticleComponent } from './article/article.component';
import { GridComponent } from './grid/grid.component';
import { GridBodyComponent } from './grid/grid-body/grid-body.component';
import { GridFormComponent } from './grid/grid-form/grid-form.component';
import { GridNavComponent } from './grid/grid-nav/grid-nav.component';
import { MessageComponent } from './message/message.component';
export { MessageService } from './message/message.service';

// Routing
export { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    ArticleComponent,
    GridComponent,
    GridBodyComponent,
    GridFormComponent,
    GridNavComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,          // HTTP
    FormsModule,               // Angular Form
    ReactiveFormsModule,
    PortalModule,              // Portal
    MatToolbarModule,          // Material Design: Navigation
    MatButtonModule,           //                : Buttons & Indicators
    MatIconModule,
    MatRippleModule,
    MatChipsModule,
    MatBadgeModule,
    MatSnackBarModule,         //                : Popups & Modals
    MatFormFieldModule,        //                : Form Controls
    MatInputModule,
    MatTableModule,            //                : Data Table
    MatPaginatorModule,
    MatSortModule,

    MarkdownModule.forRoot({   // Markdown
      loader: HttpClient
    }),
    PdfViewerModule,           // Pdf
    CKEditorModule,            // CKEditor
  ],
  providers: [
    MatToolbarModule,          // Material Design: Navigation
    MatButtonModule,           //                : Buttons & Indicators
    MatIconModule,
    MatRippleModule,
    MatChipsModule,
    MatBadgeModule,
    MatSnackBarModule,         //                : Popups & Modals
    MatFormFieldModule,        //                : Form Controls
    MatInputModule,
    MatTableModule,            //                : Data Table
    MatPaginatorModule,
    MatSortModule,

    {                          //                : SnackBar Configure
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      }
    }
  ],
  entryComponents: [
    MessageComponent
  ],
  exports: [
    ArticleComponent,
    GridComponent
  ]
})
export class SharedModule { }

