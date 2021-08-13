import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {ActionSheetController, ModalController} from "@ionic/angular";
import {StorageService} from "../../services/storage.service";
import {Bet} from "../../models/bet";
import {AppComponent} from "../app.component";


@Component({
  selector: 'app-bet-modal-form',
  templateUrl: './bet-modal-form.component.html',
  styleUrls: ['./bet-modal-form.component.scss'],
})
export class BetModalFormComponent implements OnInit, DoCheck {
  @Input() match;
  winner: string;
  amount: number;
  selects;

  constructor(public modalController: ModalController,
              public storageService: StorageService,
              public actionSheetController: ActionSheetController) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.actionAppears();
  }

  dismiss() {
    this.modalController.dismiss().then(value => value);
  }

  saveBetting() {
    const bet = new Bet(this.match, this.winner, this.amount);
    this.storageService.getObject('bets').then(
      bets => {
        if (!bets) {
          bets = [];
        }
        bets.push(bet);
        this.storageService.setObject('bets', bets).then(
          value => value
        );
        this.manageAmount(this.amount).then(() => {
          this.dismiss();
        });
      }
    );
  }

  actionAppears() {
    this.selects = document.querySelectorAll('.action-sheet-button.sc-ion-action-sheet-md');
    for (const element of this.selects) {
      element.style.color = 'blue';
    }
  };

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
    debugger;
  }
}
