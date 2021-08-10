import {Component, OnInit} from '@angular/core';
import {TranslatePipe} from "../../pipes/translate.pipe";
import {ClubService} from "../../services/club.service";
import {StorageService} from "../../services/storage.service";
import {Bet} from "../../models/bet";

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
  providers: [TranslatePipe],
})
export class ContactPage implements OnInit {
  bets: Array<Bet> = [];

  constructor(private translatePipe: TranslatePipe,
              public storageService: StorageService) {
    this.storageService.getObject('bets').then(
      value => console.log(value)
    );
  }

  ngOnInit() {

  }
}
