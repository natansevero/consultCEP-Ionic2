import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ResultCepPage } from '../pages/result-cep/result-cep';
import { FavoritoCepPage } from '../pages/favorito-cep/favorito-cep';
import { SobrePage } from '../pages/sobre/sobre';

import { EstadosService } from '../providers/estados-service';
import { CepService } from '../providers/cep-service';
import { FavoritosDao } from '../util/favoritos-dao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultCepPage,
    FavoritoCepPage,
    SobrePage
  ],
  imports: [
    HttpModule,
    CommonModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResultCepPage,
    FavoritoCepPage,
    SobrePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    EstadosService,
    CepService,
    FavoritosDao
  ]
})
export class AppModule {}
