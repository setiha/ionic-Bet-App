import {Component, Output} from '@angular/core';
import {TranslateService} from '../../services/translate.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @Output() tabArray: Array<{ title: string, path: string, icon: string }> = [];
  @Output() tabStart: boolean = false;

  constructor(public translate: TranslateService) {
    this.translate.getTranslates().then(tr => {
      console.log(tr);
      this.addTab(tr.HOME, 'Home', 'home');
      this.addTab(tr.BETTING, 'tab2', 'cash');
      this.addTab(tr.HISTORY, 'tab3', 'time');
      this.tabStart = true;
    });
  }

  addTab(title: string, path: string, icon: string) {
    this.tabArray.push({
      title: title,
      path: path,
      icon: icon,
    });
  }
}
