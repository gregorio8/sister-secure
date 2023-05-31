import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardianService } from '../guardian/guardian.service';
import { ToastService } from 'src/app/components/toast/toast.service';

@Component({
  selector: 'app-add-guardian',
  templateUrl: './add-guardian.page.html',
  styleUrls: ['./add-guardian.page.scss'],
})
export class AddGuardianPage implements OnInit {

  name: string = "";
  phone: any;


  constructor(
    private router: Router,
    private guardianService : GuardianService,
    private toastService: ToastService
  ) { 

  }

  ngOnInit() {  
    
  }
  
  addGuardian() {
    if(!this.name || !this.phone){
      this.toastService.presentToast('bottom', 'Campos nome e telefone são obrigatórios!', 2000);
      return;
    } else {
      this.guardianService.addToArray(this.name, this.phone);
      this.name = '';
      this.phone = '';
      this.router.navigate(['/guardian']);
    }
  }
  
  backToGuardian() {
    this.router.navigate(['/guardian']);
  }

}
