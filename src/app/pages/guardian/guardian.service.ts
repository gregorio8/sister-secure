import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardianService {

  guardians: any[] = [];

  constructor() {

  }

  addToArray(name: string, phone: number){
    this.guardians.push({'name' : name, 'phone': phone});
  }

  getGuardians(){
    return this.guardians;
  }

}
