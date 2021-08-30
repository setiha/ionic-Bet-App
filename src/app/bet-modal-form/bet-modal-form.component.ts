import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {ActionSheetController, AlertController, ModalController} from "@ionic/angular";
import {StorageService} from "../../services/storage.service";
import {Bet} from "../../models/bet";
import {BetService} from "../../services/bet.service";
import {Vibration} from "@ionic-native/vibration/ngx";
import {AboutPage} from "../about/about.page";
import {TranslateService} from "../../services/translate.service";


@Component({
  selector: 'app-bet-modal-form',
  templateUrl: './bet-modal-form.component.html',
  styleUrls: ['./bet-modal-form.component.scss'],
  providers: [Vibration, AboutPage]
})
export class BetModalFormComponent implements OnInit, DoCheck {
  @Input() match;
  winner: string;
  amount: number;
  selects;
  storageCheck = false;
  aboutAmount = 0;

  constructor(public modalController: ModalController,
              public storageService: StorageService,
              public actionSheetController: ActionSheetController,
              public betService: BetService,
              public vibration: Vibration,
              public alertController: AlertController,
              public translate: TranslateService) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.actionAppears();
    if (this.storageService.newStorage && !this.storageCheck) {
      this.storageService.getValue('amount').then(value => this.aboutAmount = value);
      this.storageCheck = true;
    }
  }

  dismiss() {
    this.modalController.dismiss().then(value => value);
  }

  saveBetting() {
    if (this.amount > this.aboutAmount) {
      return this.presentAlert();
    }
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

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.translate.getOne('ERROR'),
      subHeader: this.translate.getOne('AMOUNT_TOO_LARGE'),
      buttons: ['OK']
    });

    await alert.present();

    const {role} = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
