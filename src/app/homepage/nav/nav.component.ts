import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MessageService } from '../../shared/message/message.service';
import { Progress } from '../../shared/shared.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.styl']
})
export class NavComponent implements OnInit {
  @Input() mobile: boolean
  @Input('notice') noticeSum: number
  @Input('opened') drawer: boolean
  @Output() drawing = new EventEmitter<boolean>()

  progress: Progress

  searching: boolean
  keyword: string

  constructor(private message: MessageService) { }

  ngOnInit() {
    this.progress = {
      color: 'warn',
      mode: 'indeterminate',
      value: 0,
      buffer: 100
    }

    this.searching = false
  }

  search(): void {
    if (this.searching) {
      if (this.keyword) {
        this.message.info(this.keyword)
      } else {
        this.searching = false
      }
    } else {
      this.searching = true
    }
  }

  onDraw(opened: boolean) {
    this.drawing.emit(opened)
  }

  updateProgress(progress: Progress): void {
    this.progress = Object.assign({}, progress)
  }
}
