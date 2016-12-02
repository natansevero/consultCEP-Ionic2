import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class FavoritosDao {

  constructor(private storage: Storage){ }

  add(c) : boolean {
    this.storage.set(c.cep, c).then(() => {
      return true;
    }, (err) => {
      console.log("Error ao adicionar: " , err);
    })
    return false;
  }

  delete(cep: string) : void {
    console.log("CEP: " , cep);
    this.storage.remove(cep).then(() =>{
      console.log("Removido com sucesso!");
    }, (err) => {
      console.log("Error ao remover: ", err);
    });
  }

  list() : Array<any> {
    let ceps = [];

    this.storage.forEach((data) => {
      ceps.push(data);
    }).catch((err) => {
      console.log("Error ao listar");
    });

    return ceps;
  }
}
