import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemplatePortal } from '@angular/cdk/portal';

import { MARKDOWN_PATH } from '../shared.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.styl']
})
export class ArticleComponent implements OnInit {
  @Input('articleProtal') article: TemplatePortal<any>;
  @Input('url') url: string;
  path: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    const name = this.router.snapshot.paramMap.get('name');

    this.path = this.url || `${ MARKDOWN_PATH + name }.md`;
  }

}
