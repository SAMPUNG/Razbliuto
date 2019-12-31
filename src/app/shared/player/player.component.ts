import { Component, OnInit, Input } from '@angular/core';

import { Mode, Video } from './player.interfacce';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input('url') src: string
  @Input() poster: string
  @Input() mode: Mode
  @Input() data: Array<Video>

  single: boolean
  width: string

  constructor() { }

  ngOnInit() {
    this.single = this.mode === 'single'

    const gap = 10 * (this.data.length - 1);
    const width = 100 / this.data.length
    this.width = `calc(${width}% - ${gap}px)`
  }

  play (div: HTMLDivElement, video: HTMLVideoElement): void {
    div.className = 'visited'
    video.controls = true
    video.play()
  }
  playByIndex(index: number): void {
    const starter = document.querySelectorAll('[role="starter"]')[index] as HTMLDivElement
    const player = starter.querySelector('[role="player"]') as HTMLVideoElement

    this.play(starter, player)
  }
}
