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

  lista:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private calendar: Calendar) {
    this.calendar.listCalendars().then(
      (msg) => {
        console.log(msg);
        this.lista=msg;
        },
      (err) => { console.log(err); }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroeventoPage');
  }

}
