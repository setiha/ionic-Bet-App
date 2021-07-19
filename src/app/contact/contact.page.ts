import {Component} from '@angular/core';
import {TranslatePipe} from "../../pipes/translate.pipe";

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
  providers: [TranslatePipe],
})
export class ContactPage {
  translateP;

  constructor(private translatePipe: TranslatePipe) {
    this.translateP = translatePipe;
  }

}
