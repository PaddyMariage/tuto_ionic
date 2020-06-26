import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppareilsPage } from './appareils.page';
import {AppareilsPageRoutingModule} from "./appareils-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppareilsPageRoutingModule
  ],
  declarations: [AppareilsPage]
})
export class AppareilsPageModule {}
