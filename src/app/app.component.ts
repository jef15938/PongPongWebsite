import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public title: string;
  public isMenuOpen = true;
  constructor() {

  }

  onMenuStatusChange(isMenuOpen) {
    console.log('isMenuOpen: ', isMenuOpen);
    this.isMenuOpen = isMenuOpen;
  }
}
