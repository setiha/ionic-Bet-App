import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {StorageService} from "../../services/storage.service";

@Component({
  selector: 'app-bet-modal-form',
  templateUrl: './bet-modal-form.component.html',
  styleUrls: ['./bet-modal-form.component.scss'],
})
export class BetModalFormComponent implements OnInit {
  @Input() match;
  winner: string;
  amount: number;

  constructor(public modalController: ModalController,
              public storageService: StorageService) {
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss().then(value => value);
  }

  saveBetting() {
    console.log(this.winner);
    console.log(this.amount);
  }
}
