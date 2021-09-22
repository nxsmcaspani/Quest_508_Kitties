import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Kitten } from './model/kitten.model';

@Injectable({
  providedIn: 'root'
})
export class KittenService {
  public allKitten:Kitten[];
  public myKitten:Kitten[];

  constructor() { 
    this.allKitten = [
      {
        name:"Grumpy",
        breed:"None",
        birthdate: new Date("2012-04-04"),
        picture: "https://www.ladn.eu/wp-content/uploads/2016/08/6356938644488566691013182599_grumpy-cat-1200x630.jpg"
      },
      {
        name:"Lil Bub",
        breed:"None",
        birthdate: new Date("2010-10-05"),
        picture: "https://static.boredpanda.com/blog/wp-content/uploads/2014/11/most-popular-cats-lil-bub-2.jpg"
      },
      {
        name:"Maru",
        breed:"None",
        birthdate: new Date("2014-11-12"),
        picture:"https://static.boredpanda.com/blog/wp-content/uploads/2014/11/famous-internet-cats-221.jpg"
      },
      {
        name:"Garfi",
        breed:"None",
        birthdate: new Date("2010-08-10"),
        picture:"https://static.boredpanda.com/blog/wp-content/uploads/2014/11/garfi-evil-grumpy-persian-cat-12.jpg"
      }
    ]
  }

  public getAllkitten(): Observable<Kitten[]>{
    return of(this.allKitten);
  }

  public addKitten(kitten:Kitten){
    this.allKitten.push(kitten);
  }
}
