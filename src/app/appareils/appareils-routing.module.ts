import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppareilsPage } from './appareils.page';
import {SingleAppareilPage} from "../single-appareil/single-appareil.page";

const routes: Routes = [
  {
    path: '',
    component:AppareilsPage
  },
  {
    path: 'single-appareil',
    loadChildren: () => import('../single-appareil/single-appareil.module').then(m => m.SingleAppareilPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppareilsPageRoutingModule {}
