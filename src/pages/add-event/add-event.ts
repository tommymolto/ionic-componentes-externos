import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
  providers:[SpeechRecognition]
})
export class AddEventPage {

  event = { title: "", location: "", message: "", startDate: "", endDate: "" };
  voz =false;
  mensagem: any;
  constructor(public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private calendar: Calendar,
  private speechRecognition: SpeechRecognition) {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
          this.speechRecognition.requestPermission()
            .then(
              () => console.log('Granted'),
              () => console.log('Denied')
            )
        }

      });
    this.temVoz();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }
  ngOnInit() {



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
  temVoz(){
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => {
      console.log(available);
      this.voz = true;
    })
  }
  porVoz(){
    this.speechRecognition.startListening()
      .subscribe(
        (matches: Array<string>) => {
          console.log(matches);
          this.mensagem = matches;
        },
            (onerror) => {
              console.log('error:', onerror)
            }

      )
  }

}
