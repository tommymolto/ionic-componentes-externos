import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

/**
 * Generated class for the CadastroeventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastroevento',
  templateUrl: 'cadastroevento.html',
  providers: [Calendar]
})
export class CadastroeventoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private calendar: Calendar) {
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroeventoPage');
  }

}
