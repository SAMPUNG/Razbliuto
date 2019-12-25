import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

import { Poker } from './poker.interface';
export { Poker } from './poker.interface';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.scss']
})
export class PokerComponent implements OnChanges {
  @Input() color: string | Array<string>
  @Input() data: Array<Poker>
  @Input() footer: string
  @Input() height: number
  @Input('row-size') rowSize: number
  columnWidth: string
  columnColor: Array<string>
  footerColor: string
  mobile: boolean
  rowHeight: string
  size: number
  tableHeight: string

  constructor(private platform: Platform) {
    // current browser: EDGE || FIREFOX || SAFARI
    // current platform: ANDROID || IOS
    // current rendering engine: BLINK || TRIDENT || WEBKIT
    this.mobile = this.platform.ANDROID || this.platform.IOS
  }

  ngOnChanges(changes: SimpleChanges): void {console.log(changes)
    const rowSize = changes.rowSize ? changes.rowSize.currentValue : 3
    const height = changes.height ? changes.height.currentValue : 100
    const color = changes.color ? changes.color.currentValue : 'pink'

    this.calcSize(rowSize, height, changes.data.currentValue.length, color)
    this.footerColor = changes.footer ? changes.footer.currentValue : 'hotpink'
  }

  calcSize(rowSize: number, height: number, dataCount: number, color: string | Array<string>): void {
    // Size is always 2 while running on mobile devices
    this.size = this.mobile ? 2 : rowSize

    if (typeof color === 'string') {
      this.columnColor = 'x'.repeat(dataCount).split('').fill(color)
    } else {
      this.columnColor = []
      while (color.length < dataCount) {
        this.columnColor = this.columnColor.concat(color)
      }
    }

    const rowHeight: number = height || 100
    const rowCount: number = Math.ceil(dataCount / this.size)
    const tableHeight: number = rowHeight * rowCount + 15 * (rowCount - 1)
    const columnWidth: number = Math.floor(100 / this.size)

    this.tableHeight = `${ tableHeight }px`
    this.columnWidth = `calc(${ columnWidth }% - 15px)`
    this.rowHeight = `${ rowHeight }px`
  }

}
