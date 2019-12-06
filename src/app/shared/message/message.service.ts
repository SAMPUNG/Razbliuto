import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { MessageComponent } from './message.component';

import { COLOR_NAME, Popup, Alert } from '../shared.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private notice: MatSnackBar) { }

  open(data: Popup): void {
    const noticeRef  = this.notice.openFromComponent(MessageComponent, getConfig(data));

    noticeRef.afterDismissed().subscribe(() => {
      console.log('The snack-bar was dismissed');
    })

    noticeRef.onAction().subscribe(() => {
      console.log('The snack-bar action was triggered!');
    })
  }

  simple(message: string, color: COLOR_NAME): void {
    this.notice.openFromComponent(
      MessageComponent,
      getConfig({
        color,
        message,
      }
    ));
  }

  success(message: string): void {
    this.simple(message, COLOR_NAME.success)
  }
  error(message: string): void {
    this.simple(message, COLOR_NAME.error)
  }
  warning(message: string): void {
    this.simple(message, COLOR_NAME.warning)
  }
  info(message: string): void {
    this.simple(message, COLOR_NAME.info)
  }
  alert(config: Alert): void {
    const noticeRef  = this.notice.openFromComponent(MessageComponent, getConfig({
      action: 'Accepted',
      color: COLOR_NAME.warning,
      message: config.message,
    }));

    noticeRef.onAction().subscribe(() => {
      config.onAccept()
    })
  }

  steps(data: Array<Popup>): void {
    const dataLen = data.length;
    const oneStep = (current: number) => {
      const info = data[current];
      const noticeRef  = this.notice.openFromComponent(MessageComponent, getConfig(info));
      noticeRef.afterDismissed().subscribe(() => {
        console.log('Code End');
      });
      noticeRef.onAction().subscribe(() => {
        const nextStep = current  + 1
        if (nextStep < dataLen) {
          oneStep(nextStep)
        }
      });
    }

    oneStep(0);
  }
}

const getConfig = (data: Popup): object => {
  let noticeConfig = {
    announcementMessage: 'hello, world',
    data
  };
  if (data.action) {
    noticeConfig['duration'] = null
  };
  return noticeConfig;
}
