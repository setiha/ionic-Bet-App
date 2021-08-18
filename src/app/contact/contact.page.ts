import {Component, DoCheck, OnInit} from '@angular/core';
import {TranslatePipe} from "../../pipes/translate.pipe";
import {ClubService} from "../../services/club.service";
import {StorageService} from "../../services/storage.service";
import {Bet} from "../../models/bet";
import {BetService} from "../../services/bet.service";

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
  providers: [TranslatePipe],
})
export class ContactPage implements OnInit, DoCheck {
  bets: Array<Bet> = [];
  storageCheck = false;

  constructor(public betService: BetService,
              public storageService: StorageService) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.storageService.newStorage && !this.storageCheck) {
      this.betService.getBets();
      this.betService.subject.subscribe(
        bets => {
          this.bets = bets;
        }
      );
      this.setTimer();
      this.storageCheck = true;
    }
  }

  setTimer() {
    console.log('Mukodik');
    const myTimer = setTimeout(() => window.location.reload());
    this.stopTimer(myTimer);
  }

  stopTimer(timer) {
    clearTimeout(timer);
  }
}
