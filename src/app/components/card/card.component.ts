import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() conteudo: any;

  constructor(private modalController: ModalController) {}

  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        conteudo: this.conteudo
      }
    });

    await modal.present();
  }
}
