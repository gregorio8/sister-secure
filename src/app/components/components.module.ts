import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { ModalComponent } from './modal/modal.component';
import { CardComponent } from './card/card.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CustomButtonComponent, ModalComponent, CardComponent],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule
  ],
  exports: [CustomButtonComponent, ModalComponent, CardComponent]
})
export class ComponentsModule { }
