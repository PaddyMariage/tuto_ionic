import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {
  name: string;

  constructor(private dataNav: DataService) {
    console.log(dataNav.getData())
    this.name = dataNav.getData();
    console.log(name)
  }

  ngOnInit() {
  }
}
