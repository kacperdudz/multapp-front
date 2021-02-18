import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  user:string = '';

  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem('SessionUser'))
    this.user = localStorage.getItem('SessionUser')
  }

}
