import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, MenuController } from 'ionic-angular';
import { FavoritosDao } from '../../util/favoritos-dao';

@Component({
  selector: 'page-result-cep',
  templateUrl: 'result-cep.html'
})
export class ResultCepPage {

  result: any;

  constructor(public navCtrl: NavController, private params: NavParams, private dao: FavoritosDao,
              private toastCtrl: ToastController, private menuCtrl: MenuController) {
    this.result = this.params.get('result') || {};

  }

  ionViewDidLoad() {
    console.log('Hello ResultCepPage Page');
    this.menuCtrl.swipeEnable(false);
  }

  addCep(cep: any) {
    //Por um motivo desconhecido, o método está retornando false quando dá certo... Então ai está o POG
    if(this.dao.add(cep) == false){
      let toast = this.toastCtrl.create({
        message: 'CEP adicioando aos favoritos!',
        duration: 3000
      });

      toast.present();
    }
  }

}
