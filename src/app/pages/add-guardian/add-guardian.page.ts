import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardianService } from '../guardian/guardian.service';

@Component({
  selector: 'app-add-guardian',
  templateUrl: './add-guardian.page.html',
  styleUrls: ['./add-guardian.page.scss'],
})
export class AddGuardianPage implements OnInit {

  name: string = "";
  phone: number = 0;


  constructor(private router: Router, private guardianService : GuardianService) { 

  }

  ngOnInit() {  
    
  }
  
  addGuardian() {
    this.guardianService.addToArray(this.name, this.phone)
    this.router.navigate(['/guardian'],);
  }

}
