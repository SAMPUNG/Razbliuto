import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { ProgressComponent } from './progress/progress.component';

const sharedRoutes: Routes = [
  {
    path: 'article/:type/:name',
    component: ArticleComponent
  },
  {
    path: 'article/:type/:book/:chapter',
    component: ArticleComponent,
  },
  {
    path: 'buffer/:value/:bufferValue',
    component: ProgressComponent,
    outlet: 'status',
    data: {
      type: 'buffer'
    }
  },
  {
    path: 'done/:value',
    component: ProgressComponent,
    outlet: 'status',
    data: {
      type: 'done'
    }
  },
  {
    path: 'query',
    component: ProgressComponent,
    outlet: 'status',
    data: {
      type: 'query'
    }
  },
  {
    path: 'when',
    component: ProgressComponent,
    outlet: 'status',
    data: {
      type: 'when'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(sharedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SharedRoutingModule { }
