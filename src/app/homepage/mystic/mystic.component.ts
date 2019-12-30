import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-mystic',
  templateUrl: './mystic.component.html',
  styleUrls: ['./mystic.component.scss']
})
export class MysticComponent implements OnInit {
  url: string

  constructor() {
    this.url = './assets/markdown/home.md'
  }

  ngOnInit() {
  }

}
