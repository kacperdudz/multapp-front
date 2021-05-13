import { Injectable } from '@angular/core';
import { MultCard } from 'src/app/models/MultCard';

@Injectable({
  providedIn: 'root'
})
export class CardManipService {


  cardArr: Array<MultCard> = [];

 // multNums = [1];

  constructor() { }

  getNewCard(){
    let newCard: MultCard = {ln: this.getRandInt(10), rn: this.getRandInt(10)};
    this.cardArr.splice(0, 0, newCard)
  }

  getRandInt(upper:number){
    return Math.floor((Math.random() * upper));
  }
}
