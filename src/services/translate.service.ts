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
  generateUrl() {
    return `${this.langDir}${this.lang}.json`;
  }

  getTranslates(): Promise<any> {

    return new Promise((resolve, rejects) => {
      if(Object.keys(this.translate).length > 0){
        return resolve(this.translate);
      }
      this.http.get(this.generateUrl()).forEach(
        res => {
          this.translate = res;
          resolve(this.translate);
        }
      ).then(value => value);
    });
  };

  getText(key){

  }
}
