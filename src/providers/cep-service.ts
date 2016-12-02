import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CepService {

  constructor(public http: Http) {
    console.log('Hello CepService Provider');
  }

  getInfos(estado: any, cidade: any) : Promise<Response> {
    return this.http.get('https://viacep.com.br/ws/' +estado+ '/' +cidade+ '/json/').toPromise();
  }

}
