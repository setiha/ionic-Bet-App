import {Component, DoCheck, OnInit} from '@angular/core';
import {TranslateService} from '../../services/translate.service';
import {StorageService} from "../../services/storage.service";
import {AlertController} from "@ionic/angular";
import {BetService} from "../../services/bet.service";


//import {Device} from '@ionic-native/device/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  //providers: [Device]
})
export class HomePage implements OnInit, DoCheck {
  content: string;
  amount = 0;
  storageCheck = false;
  debug;

  constructor(public storageService: StorageService,
              public alertController: AlertController,
              public betService: BetService,
              public translate: TranslateService
  ) {
  }

  ngOnInit() {
  }

  ngDoCheck() {

    if (this.storageService.newStorage && !this.storageCheck) {
      this.initPage();
      this.storageCheck = true;

    }
  }

  async resetStorage() {
    const alert = await this.alertController.create({
      cssClass: 'myAlert',
      header: 'Adatok torlese',
      message: 'Message <strong>Az osszes adatot torli? A muvelet nem vonhato vissza</strong>!!!',
      buttons: [
        {
          text: 'Megse',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.storageService.storage.clear().then(value => value);
            this.initPage();
            document.location.reload();
          }
        }
      ]
    });

    await alert.present();
  }

  async showAmountPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.translate.getOne('TOP_UP_MESSAGE'),
      inputs: [
        {
          name: 'addAmount',
          type: 'number',
          placeholder: this.translate.getOne('AMOUNT')
        },
      ],
      buttons: [
        {
          text: 'Megsem',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            this.betService.addNewAmount(parseInt(data.addAmount));
          }
        }
      ]
    });
    await alert.present();
  }

  initPage() {
    this.storageService.getValue('amount').then(
      amount => {
        if (!amount || amount === 0) {
          this.storageService.setValue('amount', 250000).then(val => val);
        }
        this.amount = amount;
      });
  }

  refreshPage() {
    window.location.reload();
  }
}
