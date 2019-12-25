import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MessageService } from '../../shared/message/message.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() mobile: boolean
  @Input('notice') noticeSum: number
  @Input('opened') drawer: boolean
  @Output() drawing = new EventEmitter<boolean>()

  searching: boolean
  keyword: string

  constructor(private message: MessageService) { }

  ngOnInit() {
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
}
