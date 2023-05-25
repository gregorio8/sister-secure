import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getJavaTest() {
    const url = 
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';
    return this.http.get(url);
  }

}
