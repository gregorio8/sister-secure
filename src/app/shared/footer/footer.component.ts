import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController) {

  }
  
  ngOnInit() {

  }

  goHome() {
    this.router.navigate(['/home']);
  }

  goGuardian() {
    this.router.navigate(['/guardian']);
  }

  goLocation() {
    this.router.navigate(['/location']);
  }

  callPolice() {
    this.router.navigate(['/police'])
  }

  async openCallPoliceDialog() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Deseja ligar para a Polícia?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Ação cancelada');
          }
        },
        {
          text: 'Ligar',
          cssClass: 'xuxa',
          handler: () => {
            console.log('Ação executada');
            this.callPolice();
          }
        }
      ]
    });

    await alert.present();
  }

}
