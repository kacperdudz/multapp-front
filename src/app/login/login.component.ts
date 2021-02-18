import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string = '1';

  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem('SessionUser'))
    localStorage.setItem('SessionUser',this.user)
  }

}
