import { Component, OnInit } from '@angular/core';
import { MultCard } from 'src/app/models/MultCard';
import { CardManipService } from '../services/card-manip/card-manip.service';
import { interval, Observable, of, Subscription } from 'rxjs';
// import { FormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-mult-card',
  templateUrl: './mult-card.component.html',
  styleUrls: ['./mult-card.component.css']
})
export class MultCardComponent implements OnInit {

  constructor(private cardManipService: CardManipService) { 
    this.card = {
      ln: this.getRandInt(10),
      rn: this.getRandInt(10)
    }
    this.status = "default";
    this.myBoolean = true;
    this.time = new Date().getSeconds();
    console.log(this.time)

    let seconds = 3;
    const time = seconds;
    const timer$ = interval(1000);

    this.sub = timer$.subscribe((sec) => {
      sec++;
      console.log(sec)
      this.progressbarValue = 100 - (sec * 100) / seconds;
      this.curSec = sec;

      if (this.curSec === seconds || this.status == "correct") {
        this.status = "expired";
        console.log("unsubbing")
        this.sub.unsubscribe();

        //this.myBoolean = false;
        this.cardManipService.getNewCard();
      }
    });

    

  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    console.log("destroyed")
  }

  card: MultCard;
  userInput: string;
  status: string;
  myBoolean: boolean;
  time: number;
  
  progressbarValue = 100;
  curSec: number = 0;

  sub: Subscription;

  getRandInt(upper:number){
    return Math.floor((Math.random() * upper));
  }
  
  onSubmit() {
    console.log(this.userInput);
    if ((this.card.ln * this.card.rn).toString() == this.userInput){
      console.log(true);
      this.status = "correct";
      //this.myBoolean = false;
    }
    else{
      //this.userInput = "";
      this.status = "incorrect";
    }

    console.log("unsubbing")
      this.sub.unsubscribe();
      //TODO service call here for getting new card
      this.cardManipService.getNewCard();
  }

  getColor(status: string){
    switch (status) {
      case 'default':
        return 'white';
      case 'correct':
        return '#c2ffc3';
      case 'incorrect':
        return '#ffc9bf';
      case 'expired':
        return '#c7c7c7';
    }
  }

}
