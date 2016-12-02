import { Component } from '@angular/core';

import { NavController, LoadingController, AlertController } from 'ionic-angular';

import { ResultCepPage } from '../result-cep/result-cep';

import { EstadosService } from '../../providers/estados-service';
import { CepService } from '../../providers/cep-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  estados: any = [];
  estado: any;
  cidade: string;

  constructor(public navCtrl: NavController, private estadosService: EstadosService,
              private cepService: CepService, private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {

              this.get();
  }

  private get() : void {
    this.estadosService.getEstados().then(resp => {
      resp.forEach(data => {
          //console.log(data);
          this.estados.push(data);
      });
    }, (err) => {
      console.log("Err: ", err);
    })
  }

  buscar() : void {
    console.log(this.estado, this.cidade);
    this.cepService.getInfos(this.estado, this.cidade).then((resp) => {
      console.log(resp.json());
      let json = resp.json();
  
      let loader = this.loadingCtrl.create({
        content: "Pesquisando CEP...",
        duration: 2000
      });
      loader.present();

      setTimeout(() => {
        this.navCtrl.push(ResultCepPage, { result: json });
      }, 2000);

    }, (err) => {
      this.alertError();
      console.log("Error Buscar(): " , err);
    })
  }

  private alertError() {
    let alert = this.alertCtrl.create({
      title: 'Erro ao Pesquisar!',
      subTitle: 'Você pode estar passando dados errados ou não preenchendo algum campo.',
      buttons: ['OK']
    });
    alert.present();
  }

}
