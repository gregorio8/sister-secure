import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuardianPageRoutingModule } from './guardian-routing.module';

import { GuardianPage } from './guardian.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuardianPageRoutingModule,
    SharedModule
  ],
  declarations: [GuardianPage]
})
export class GuardianPageModule {}
