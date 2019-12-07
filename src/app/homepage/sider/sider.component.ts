import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

// import { DialService } from '../../components/dial/dial.service';

import { MENU } from './sider.interface';
import { Popup } from '../../shared/shared.interface';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.styl']
})
export class SiderComponent implements OnInit {
  @Input() mobile: boolean
  @Input() notice: Array<Popup>
  @Output() drawing = new EventEmitter<boolean>()
  @Output() clearNotice = new EventEmitter<void>()

  menu = MENU
  reuteMap: Map<string, string> = new Map()
  eventMap: Map<string, string> = new Map()

  constructor(
    // private dialService: DialService,
    private router: Router
  ) {
    this.menu.map(section => {
      section.items.filter(item => !item.disabled).map(item => {
        if (item.route) {
          this.reuteMap.set(item.name, item.method)
        } else {
          this.eventMap.set(item.name, item.method)
        }
      })
    })

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.closeDrawer()
      })
  }

  ngOnInit() {
  }

  openDial(): void {
    // this.dialService.openDial()
  }

  onNode(name: string): void {
    if (this.eventMap.has(name)) {
      this[this.eventMap.get(name)]()
    }
    if (this.reuteMap.has(name)) {
      this.router.navigate([
        this.reuteMap.get(name)
      ])
    }
    this.closeDrawer()
  }

  openStep(index: number): void {
    this.menu[index].opened = true
  }

  closeStep(index: number): void {
    this.menu[index].opened = false
  }

  prevStep(index: number): void {
    this.closeStep(index)
    this.openStep(index - 1)
  }

  nextStep(index: number): void {
    this.closeStep(index)
    this.openStep(index + 1)
  }

  closeDrawer(): void {
    this.drawing.emit(false)
  }

  closeWin(): void {
    if (~navigator.userAgent.indexOf('FireFox')) {
      location.href = 'about:blank'
    } else {
      window.opener = null
      window.open(' ', '_self', ' ')
      window.close()
    }
  }

  clearNoticeAll(): void {
    this.clearNotice.emit()
  }
}
