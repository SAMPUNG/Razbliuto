import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemplatePortal } from '@angular/cdk/portal';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { MARKDOWN_PATH, PDF_PATH } from '../shared.interface';
import { ProgressService } from '../progress/progress.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.styl']
})
export class ArticleComponent implements OnInit {
  @Input('articleProtal') article: TemplatePortal<any>;
  @Input('data') data: string;
  @Input('type') type: string;
  @Input('url') url: string;
  Editor: any;
  path: string;
  sourceType: string;

  constructor(
    private progress: ProgressService,
    private router: ActivatedRoute
  ) {
    this.Editor = ClassicEditor
  }

  ngOnInit() {
    if (this.url) {
      this.path = this.url;
      this.sourceType = this.type;
    } else {
      const params = this.router.snapshot.paramMap;
      const name = params.get('name');
      const type = params.get('type');
      const book = params.get('book');
      const chap = params.get('chapter');

      let sourceUrl = name;

      if (chap) {
        sourceUrl = `${ book }/${ chap }`;
      }

      switch (type) {
        case 'md': {
          this.path =  `${ MARKDOWN_PATH + sourceUrl }.md`;
          break;
        }
        case 'pdf': {
          this.path =  `${ PDF_PATH + sourceUrl }.pdf`;
          break;
        }
      }

      this.sourceType = type;
      this.ready();
    }
  }

  error(): void {
    this.progress.error()
  }
  loaded(): void {
    this.progress.loaded()
  }
  ready(): void {
    this.progress.loading()
  }

}
