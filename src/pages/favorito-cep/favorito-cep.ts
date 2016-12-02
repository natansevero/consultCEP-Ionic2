import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavoritosDao } from '../../util/favoritos-dao';

@Component({
  selector: 'page-favorito-cep',
  templateUrl: 'favorito-cep.html'
})
export class FavoritoCepPage {

  cepsList: Array<any> = [];

  constructor(public navCtrl: NavController, private dao : FavoritosDao) {
    setTimeout(() => {
      this.listCep();
    }, 100)
  }

  ionViewDidLoad() {
    console.log('Hello FavoritoCepPage Page');
  }

  private listCep() : void {
    this.cepsList = this.dao.list();
  }

  removeCep(cep: any) : void {
    this.dao.delete(cep);
    this.listCep();
  }

}
