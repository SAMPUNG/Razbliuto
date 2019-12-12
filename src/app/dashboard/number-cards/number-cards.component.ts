import { Component, OnInit, Input } from '@angular/core';

import { NumberCard } from './number-cards.interface';
import { CARDS } from './number-cards.datasource';

@Component({
  selector: 'app-number-cards',
  templateUrl: './number-cards.component.html',
  styleUrls: ['./number-cards.component.styl']
})
export class NumberCardsComponent implements OnInit {
  @Input('height') height: number
  @Input('row-size') rowSize: number
  data: Array<NumberCard> = CARDS
  tableHeight: string
  columnWidth: string
  rowHeight: string
  size: number

  constructor() { }

  ngOnInit() {
    this.size = this.rowSize || 3

    const rowHeight: number = this.height || 100
    const rowCount: number = Math.ceil(this.data.length / this.size)
    const tableHeight: number = rowHeight * rowCount + 15 * (rowCount - 1)
    const columnWidth: number = Math.floor(100 / this.size)

    this.tableHeight = `${ tableHeight }px`
    this.columnWidth = `calc(${ columnWidth }% - 15px)`
    this.rowHeight = `${ rowHeight }px`
  }

}
