import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/register.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userData: any = {};
  showPassword: boolean = false;
  newPassword : string = "";

  constructor(private registerService: RegisterService, private alertController: AlertController, private router: Router) {
    this.userData = this.registerService.userData;
    
  }

  ngOnInit() {
  }

  togglePassword(event: Event) {
    event.preventDefault();
    event.stopPropagation(); 
    this.showPassword = !this.showPassword;
  }

  async changePassword(newPassword: string) {
    this.userData.password = newPassword;
    await this.registerService.saveNewUserData(newPassword);
    console.log('Senha alterada com sucesso!');
  }


  async openChangePasswordDialog() {
    const alert = await this.alertController.create({
      header: 'Altere sua Senha',
      inputs: [
        {
          name: 'newPassword',
          type: 'password',
          placeholder: 'Nova Senha'
        },
      ],
      buttons: [
        {
          text: 'Voltar',
          role: 'cancel',
          handler: () => {
            console.log('Ação cancelada');
          }
        },
        {
          text: 'Alterar',
          cssClass: 'xuxa',
          handler: (data) => {
            this.changePassword(data.newPassword)
            console.log('Ação executada');
          }
        }
      ]
    });

    await alert.present();
  }

}
