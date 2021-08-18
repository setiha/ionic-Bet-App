import {Component, DoCheck} from '@angular/core';
import {TranslateService} from '../../services/translate.service';
import {StorageService} from "../../services/storage.service";
import {AlertController} from "@ionic/angular";
import {ReplaySubject, Subject} from "rxjs";
import {DeviceAccounts} from "@ionic-native/device-accounts/ngx";
import {Device} from '@ionic-native/device/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [DeviceAccounts, Device]
})
export class HomePage implements DoCheck {
  content: string;
  amount = 0;
  storageCheck = false;
  debug = {};

  constructor(public storageService: StorageService,
              public alertController: AlertController,
              private deviceAccounts: DeviceAccounts,
              private device: Device) {
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
            window.location.reload();
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
          this.amount = 25000;
        }
        this.amount = amount;
      });
    //this.deviceAccounts.get()
    //.then(accounts => this.debug = accounts)
    //.catch(error => this.debug = error);
    this.debug = this.device.uuid;
  }

  refreshPage() {
    window.location.reload();
  }
}
