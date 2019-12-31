import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

import { Poker } from '../poker/poker.interface';
import { CARDS } from './index.datasource';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    credits: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }],
    title: {
      text: null
    },
    yAxis: {
      title: null
    }
  };
  pokerData: Array<Poker> = CARDS

  constructor() { }

  ngOnInit() {
  }

}
