import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  likes : number = 0;
  likeBool : boolean = false;
  message: any;

  conteudos: any[] = [];

  constructor(
    private homeService: HomeService,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  async addPostOnFeed() {
    const modal = await this.modalController.create({
      component: ModalComponent
    });

    await modal.present();
  }

  ngOnInit() {
    this.homeService.getJavaTest().subscribe( response => {
     this.message = response;
     console.log(response)
    });
  }

  like(){
    if(this.likeBool){
      this.likes--;
      this.likeBool = false;
    } else {
      this.likes++;
      this.likeBool = true;
    }
  }

  removeLike(){

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
