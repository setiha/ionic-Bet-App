import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {ActionSheetController, ModalController} from "@ionic/angular";
import {StorageService} from "../../services/storage.service";
import {Bet} from "../../models/bet";
import {BetService} from "../../services/bet.service";
import {Vibration} from "@ionic-native/vibration/ngx";


@Component({
  selector: 'app-bet-modal-form',
  templateUrl: './bet-modal-form.component.html',
  styleUrls: ['./bet-modal-form.component.scss'],
  providers:[Vibration]
})
export class BetModalFormComponent implements OnInit, DoCheck {
  @Input() match;
  winner: string;
  amount: number;
  selects;

  constructor(public modalController: ModalController,
              public storageService: StorageService,
              public actionSheetController: ActionSheetController,
              public betService: BetService,
              public vibration: Vibration) {
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
    this.betService.addBet(bet, this.amount);
    this.vibration.vibrate(700);
    this.dismiss();
  }

  actionAppears() {
    this.selects = document.querySelectorAll('.action-sheet-button.sc-ion-action-sheet-md');
    for (const element of this.selects) {
      element.style.color = 'blue';
    }
  };

}
