import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PolicePageRoutingModule } from './police-routing.module';

import { PolicePage } from './police.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PolicePageRoutingModule,
    SharedModule
  ],
  declarations: [PolicePage]
})
export class PolicePageModule {}
