import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from "../services/translate.service";

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  currentTranslates = {};

  constructor(private tService: TranslateService) {
    tService.getTranslates().then(tr => {
        this.currentTranslates = tr;

      }
    );
  }

  transform(value: string, ...args: unknown[]): unknown {
    return this.currentTranslates[value];
  }
}
