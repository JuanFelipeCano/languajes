import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TranslateService } from '@ngx-translate/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _translate: TranslateService) {
    platform.ready().then(() => {
      this._initTranslate();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  private _initTranslate() {
    //Seleccionar el lenguaje por defecto
    this._translate.setDefaultLang('en');

    if (this._translate.getBrowserLang() !== undefined) {
      //Seleccionar un lenguaje dependiendo de la ubicación
      this._translate.use(this._translate.getBrowserLang());
    } else {
        this._translate.use('en'); //Seleccionar un lenguaje por defecto
    }
  }
}

