import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalComponent } from '../../components/modal/modal.component';
import { PostModalComponent } from 'src/app/components/post-modal/post-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  likes : number = 0;
  likeBool : boolean = false;
  message: any;

  posts: { content: string }[] = [];

  constructor(
    private homeService: HomeService,
    private router: Router,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  async addPost() {
    const modal = await this.modalController.create({
      component: ModalComponent,
    });

    modal.onDidDismiss().then((result = {}) => {

      const {data} = result;

      if (data) {
        this.posts.push({ content: data });
      }
    });

    return await modal.present();
  }

  async openPostModal(post: any) {
    const modal = await this.modalController.create({
      component: PostModalComponent,
      componentProps: {
        postContent: post.content
      }
    });
  
    return await modal.present();
  }

  ngOnInit() {
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
