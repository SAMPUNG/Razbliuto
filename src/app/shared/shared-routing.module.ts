import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleComponent } from './article/article.component';

const sharedRoutes: Routes = [
  {
    path: 'article/:type/:name',
    component: ArticleComponent
  },
  {
    path: 'article/:type/:book/:chapter',
    component: ArticleComponent
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
