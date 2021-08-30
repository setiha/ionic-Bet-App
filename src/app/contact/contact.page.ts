import {Component, DoCheck, OnInit} from '@angular/core';
import {TranslatePipe} from "../../pipes/translate.pipe";
import {ClubService} from "../../services/club.service";
import {StorageService} from "../../services/storage.service";
import {Bet} from "../../models/bet";
import {BetService} from "../../services/bet.service";
import {HomePage} from "../home/home.page";
import {Subject} from "rxjs";
import {element} from "protractor";

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
  providers: [TranslatePipe],
})
export class ContactPage implements OnInit, DoCheck {
  bets: Array<Bet> = [];
  storageCheck = false;
  currentAmount: Subject<any> = new Subject<any>();
  amount = 0;
  elemRefresh = false;

  constructor(public betService: BetService,
              public storageService: StorageService) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    if (this.storageService.newStorage && !this.storageCheck) {
      if (!this.elemRefresh) {
        this.storageService.getValue('amount').then(
          value => this.currentAmount.next(value)
        );
        this.elemRefresh = true;
      }
      this.betService.getBets();
      this.betService.subject.subscribe(
        bets => {
          this.bets = bets;
        }
      );
      this.storageCheck = true;
    }
  }

  getColor(bet: Bet) {
    if (!bet.done) {
      return 'light';
    }
    return bet.win ? 'secondary' : 'danger';
  }
}
