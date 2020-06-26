import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {
  private appareil;

  constructor(private dataNav: DataService) {
    this.appareil = dataNav.getData();
  }

  ngOnInit() {
  }
}
