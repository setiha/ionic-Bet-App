import {Component} from '@angular/core';
import {TranslatePipe} from "../../pipes/translate.pipe";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers:[TranslatePipe]
})
export class Tab2Page {
  translateP;

  constructor(private translatePipe: TranslatePipe) {
    this.translateP = translatePipe;
  }

}
