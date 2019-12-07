import { Component, OnInit } from '@angular/core'
import { Platform } from '@angular/cdk/platform'

import { COLOR_NAME, Popup } from '../shared/shared.interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.styl']
})
export class HomepageComponent implements OnInit {
  notice: Array<Popup>
  opened: boolean
  mobile: boolean

  constructor(private platform: Platform) { }

  ngOnInit(): void {
    // current browser: EDGE || FIREFOX || SAFARI
    // current platform: ANDROID || IOS
    // current rendering engine: BLINK || TRIDENT || WEBKIT
    this.mobile = this.platform.ANDROID || this.platform.IOS

    this.notice = [
      {
        action: null,
        color: COLOR_NAME.default,
        icon: null,
        message: 'hello, world',
        method: null,
      }, {
        action: 'Hi',
        color: COLOR_NAME.primary,
        icon: null,
        message: 'Say Hi',
        method: null
      }
    ]

    this.opened = false
  }

  drawing(opened: boolean): void {
    this.opened = opened
  }

  clearNotice(): void {
    this.notice = []
  }
}
