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
  amount;
  sub: Subject<any> = new Subject();
  intVal;
  winRatio = 1.3;
  currentAmount = 0;

  constructor(public storageService: StorageService) {
  }

  getBets() {
    this.storageService.getValue('bets').then(
      value => {
        this.currentBets = JSON.parse(value);
        if (!this.currentBets) {
          return;
        }this.intVal = setInterval(() => {
          this.lot();
        }, 4000);
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
              document.location.reload();
              resolve(true);
            });
        }
      );
    });
  }

  addNewAmount(amount: number) {
    this.storageService.getValue('amount').then(
      currentAmount => {
        currentAmount = currentAmount + amount;
        this.storageService.setValue('amount', currentAmount).then(value => value);
      });
  }

  lot() {
    if (this.numOfDoneBet() === this.currentBets.length) {
      clearInterval(this.intVal);
      return;
    }
    const l = this.currentBets.length;
    const index = Math.floor(Math.random() * l);
    const bet = this.currentBets[index];
    if (bet.done) {
      return this.lot();
    }
    const win = Math.ceil(Math.random() * 2);
    this.currentBets[index].done = true;
    if (bet.winnerCode === bet.match['team' + win].code) {
      this.currentBets[index].win = true;
      this.addNewAmount(Math.round(bet.amount * this.winRatio));
    }
    this.subject.next(this.currentBets);
  }

  numOfDoneBet() {
    let num = 0;
    for (const bet of this.currentBets) {
      if (bet.done) {
        num++;
      }
    }
    return num;
  }
}
