import {DoCheck, Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Bet} from "../models/bet";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class BetService {
  currentBets: Array<Bet>;
  subject: Subject<Bet[]> = new Subject();

  constructor(public storageService: StorageService) {
  }

  getBets() {
    this.storageService.getValue('bets').then(
      value => {
        this.currentBets = JSON.parse(value);
        console.log(this.currentBets);
        this.subject.next(this.currentBets);
      });
  }

  addBet(bet: Bet, amount) {
    this.storageService.getObject('bets').then(
      bets => {
        if (!bets) {
          bets = [];
        }
        bets.push(bet);
        this.storageService.setObject('bets', bets).then(
          value => value
        );
        this.manageAmount(amount).then(() => {
        });
      }
    );
    this.getBets();
  }

  manageAmount(amount): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storageService.getValue('amount').then(
        currentAmount => {
          currentAmount -= amount;
          this.storageService.setValue('amount', currentAmount).then(
            () => {
              resolve(true);
            });
        }
      );
    });
  }
}
