import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string, duration: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: position,
      cssClass: 'custom-toast'
    });

    toast.present().then(() => {
      const toastElement = document.querySelector('ion-toast.custom-toast');
      if (toastElement instanceof HTMLElement) {
        const toastStyle = window.getComputedStyle(toastElement);
        toastElement.style.setProperty('--background', 'red');
        toastElement.style.setProperty('font-weight', 'bold');
        toastElement.style.setProperty('--color', 'white');
      }
    });

    await toast.present();
  }
}
