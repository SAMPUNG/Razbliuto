import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.styl']
})
export class WelcomeComponent implements OnInit {
  title = 'Razbliuto';

  constructor() { }

  ngOnInit() {
  }

}