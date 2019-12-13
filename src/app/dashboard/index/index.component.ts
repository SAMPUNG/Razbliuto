import { Component, OnInit } from '@angular/core';

import { Poker } from '../poker/poker.interface';
import { CARDS } from './index.datasource';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.styl']
})
export class IndexComponent implements OnInit {
  pokerData: Array<Poker> = CARDS

  constructor() { }

  ngOnInit() {
  }

}
