import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  postContent: string = '';

  constructor(private modalController: ModalController) {}

  fecharModal() {
    this.modalController.dismiss();
  }

  savePost() {
    if (this.postContent) {
      this.modalController.dismiss(this.postContent);
    }
  }

}
