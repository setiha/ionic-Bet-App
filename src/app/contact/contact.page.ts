import {Component, DoCheck, OnInit} from '@angular/core';
import {TranslatePipe} from "../../pipes/translate.pipe";
import {ClubService} from "../../services/club.service";
import {StorageService} from "../../services/storage.service";
import {Bet} from "../../models/bet";

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
  providers: [TranslatePipe],
})
export class ContactPage implements OnInit, DoCheck {
  bets: Array<Bet> = [];
  storageCheck = false;

  constructor(private translatePipe: TranslatePipe,
              public storageService: StorageService) {

  }

  ngOnInit() {

  }

  ngDoCheck() {
    if (this.storageService.newStorage && !this.storageCheck) {
      this.storageService.getValue('bets').then(
        value => {
          this.bets = JSON.parse(value);
          console.log(this.bets);
        });
      this.storageCheck = true;

    }
  }
}
