import {Component} from '@angular/core';
import {TranslateService} from '../../services/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  content: string;

  constructor(public translatePipe: TranslateService) {
    this.translatePipe.getTranslates().then(tr => {
      this.content = tr.CONTENT;
    });
  }

}
