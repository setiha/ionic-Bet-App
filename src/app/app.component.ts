import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  selectOption;
  constructor() {}
  setOptionStyle() {
    this.selectOption = document.querySelector(' ion-select-option#ion-selopt-0');
    this.selectOption.style.backgroundColor = 'red';
  }
}
