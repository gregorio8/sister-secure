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
      'http://localhost:8080/api';
    return this.http.get(url);
  }

}
