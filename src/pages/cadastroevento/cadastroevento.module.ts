import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroeventoPage } from './cadastroevento';

@NgModule({
  declarations: [
    CadastroeventoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroeventoPage),
  ],
})
export class CadastroeventoPageModule {}
