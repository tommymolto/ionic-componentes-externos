import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
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
  event = { title: "", location: "", message: "", startDate: "", endDate: "" };

  lista:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private calendar: Calendar,
              public alertCtrl: AlertController,
              ) {
    this.calendar.listCalendars().then(
      (msg) => {
        console.log(msg);
        this.lista=msg;
        },
      (err) => { console.log(err); }
    );
  }
  save() {
    this.calendar.createEvent(this.event.title, this.event.location, this.event.message, new Date(this.event.startDate), new Date(this.event.endDate)).then(
      (msg) => {
        let alert = this.alertCtrl.create({
          title: 'Success!',
          subTitle: 'Event saved successfully',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
      },
      (err) => {
        let alert = this.alertCtrl.create({
          title: 'Failed!',
          subTitle: err,
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroeventoPage');
  }

}
