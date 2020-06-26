import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: string;
  constructor() { }

  setData( data){
    this.data = data ;
  }

  getData():string{
    return this.data;
  }
}
