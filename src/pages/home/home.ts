import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private _translate: TranslateService) {

  }

  public ionViewDidLoad() : void {
    this._translate.use('en');
  }

  private _translateLanguage(language: string) : void {
    this._translate.use(language);
  }

}
