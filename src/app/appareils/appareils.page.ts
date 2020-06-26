import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.page.html',
  styleUrls: ['./appareils.page.scss'],
})
export class AppareilsPage implements OnInit {

  private tabAppareils = [
    { name:'Machine à laver',
      description:'description blabla'
    },
    { name:'Télévision',
      description:'description blabla'
    },
    { name:'Ordinateur',
      description:'description blabla'
    }
  ];
  constructor(private navParamsService:DataService,
              private router: Router){ }

  ngOnInit() {
  }

  onLoadAppareil(appareilData) {
    this.navParamsService.setData(appareilData);
    this.router.navigate(['single-appareil']);
  }
}
