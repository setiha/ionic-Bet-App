import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  translate = {};
  lang = 'hu';
  langDir = '../assets/lang/';

  constructor(public http: HttpClient) {
  }

  getTranslates(): Promise<any> {
    return new Promise((resolve, rejects) => {
      this.http.get(this.generateUrl()).forEach(
        res => {
          this.translate = res;
          resolve(this.translate);
        }
      ).then(value => value);
    });
  };

  generateUrl() {
    return `${this.langDir}${this.lang}.json`;
  }
}
