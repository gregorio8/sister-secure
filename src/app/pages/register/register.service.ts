import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  userData: any = {};

  constructor() {

    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      this.userData = JSON.parse(storedUserData);
    }
  }

  saveUserData() {
    localStorage.setItem('userData', JSON.stringify(this.userData));
  }

}
