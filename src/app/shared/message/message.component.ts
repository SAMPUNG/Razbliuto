import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';

import { COLOR_NAME, COLOR_HEX } from '../shared.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.styl']
})
export class MessageComponent implements OnInit {
  color: COLOR_NAME;
  type: string;

  constructor(
    private noticeRef: MatSnackBarRef<MessageComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

  ngOnInit() {
    this.color = this.isVoid(this.data.color) ? COLOR_NAME.default : this.data.color;
  }

  onAction(): void {
    this.noticeRef.dismissWithAction();
  }

  messageColor(): string {
    return COLOR_HEX[this.color];
  }
  actionColor(): string {
    return COLOR_HEX[this.color];
  }

  isVoid(data: any): boolean {
    return data === null || data === undefined;
  }
}
