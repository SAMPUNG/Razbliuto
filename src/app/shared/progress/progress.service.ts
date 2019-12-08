import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  constructor(private router: Router) { }

  buffer(value: number, bufferValue: number): void {
    this.router.navigate([
      { outlets: { status: `buffer/${ value }/${ bufferValue }` }}
    ]);
  }
  done(value: number): void {
    this.router.navigate([
      { outlets: { status: `done/${ value }` }}
    ]);
  }
  query(): void {
    this.router.navigate([
      { outlets: { status: 'query' }}
    ]);
  }
  when(): void {
    this.router.navigate([
      { outlets: { status: 'when' }}
    ]);
  }
  clear(): void {
    this.router.navigate([
      { outlets: { status: null }}
    ]);
  }

  error(): void {
    this.buffer(0, 0);
  }
  loaded(): void {
    this.done(100);
    setTimeout(() => {
      this.clear();
    }, 1000 * 3);
  }
  loading(): void {
    this.query();
  }

}
