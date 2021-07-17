import {Component} from '@angular/core';
import {TranslateService} from "../../services/translate.service";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public translate: TranslateService) {
    this.translate.getTranslates().then(tr => {
      console.log(tr);
    });
  }

}
