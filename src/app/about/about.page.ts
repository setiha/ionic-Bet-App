import {Component} from '@angular/core';
import {TranslatePipe} from "../../pipes/translate.pipe";
import {ClubService} from "../../services/club.service";
import {MatchService} from "../../services/match.service";


@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  providers: [TranslatePipe]
})
export class AboutPage {
  translateP;
  rounds: Array<object> = [];

  constructor(private translatePipe: TranslatePipe,
              private clubService: ClubService,
              private mService: MatchService) {
    this.translateP = translatePipe;
    this.mService.getAll().then(clubs => this.rounds = clubs.rounds as Array<object>);

  }

}
