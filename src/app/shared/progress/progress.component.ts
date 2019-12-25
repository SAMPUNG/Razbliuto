import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  Progress,
  PROGRESS_BUFFER,
  PROGRESS_DONE,
  PROGRESS_QUERY,
  PROGRESS_WHEN
} from '../shared.interface';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {
  progress: Progress

  constructor(private router: ActivatedRoute) {
    this.progress = PROGRESS_QUERY
  }

  ngOnInit() {
    const type = this.router.snapshot.data.type || 'when'
    this[type]()
  }

  buffer(): void {
    const snapshot = this.router.snapshot
    const value: number = +snapshot.paramMap.get('value')
    const bufferValue: number = +snapshot.paramMap.get('bufferValue')
    this.progress = Object.assign(PROGRESS_BUFFER, { value, bufferValue })
  }
  done(): void {
    const snapshot = this.router.snapshot
    const value: number = +snapshot.paramMap.get('value')
    this.progress = Object.assign(PROGRESS_DONE, { value })
  }
  query(): void {
    this.progress = PROGRESS_QUERY
  }
  when(): void {
    this.progress = PROGRESS_WHEN
  }

}
