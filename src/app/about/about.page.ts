import {Component} from '@angular/core';
import {TranslatePipe} from "../../pipes/translate.pipe";


@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  providers:[TranslatePipe]
})
export class AboutPage {
  translateP;

  constructor(private translatePipe: TranslatePipe) {
    this.translateP = translatePipe;
  }

}
