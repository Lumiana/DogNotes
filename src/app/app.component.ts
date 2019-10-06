// 0702280 Annemari Mustonen

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

// Left side menu items
  public AppPage =[
    {
      title: 'Personal Profile and Log Out',
      url: '',
      icon: 'home'
    },
    {
      title: 'Technical skills',
      url: '',
      icon: 'flash'
    },
    {
      title: 'Soft skills',
      url: '',
      icon: 'home'
    },
    {
      title: 'Personal Project',
      url: '',
      icon: 'home'
    },
    {
      title: 'Team Project',
      url: '',
      icon: 'home'
    },
    {
      title: 'Extra Curriculum activities',
      url: '',
      icon: 'home'
    },
    {
      title: 'Contact Information',
      url: '',
      icon: 'home'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
