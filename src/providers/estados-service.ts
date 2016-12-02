import { Injectable } from '@angular/core';
import { ESTADOS } from '../datas/mock-estados';
import { CIDADES } from '../datas/mock-cidades';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EstadosService {

  constructor() {
    console.log('Hello EstadosService Provider');
  }

  getEstados() : Promise<any> {
    return Promise.resolve(ESTADOS);
  }

  getCidades() : Promise<any> {
    return Promise.resolve(CIDADES);
  }

}
