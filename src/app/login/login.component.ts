import { Component, OnInit } from '@angular/core';
import { ServerService } from '../services/server/server.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showFiller = false; // needed for sidenav

  user:string = '1';

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    
    // console.log(localStorage.getItem('SessionUser'))
    // localStorage.setItem('SessionUser',this.user)
  }

  login(){
    this.serverService
      .login("test", "test")
      .subscribe(resp => {
        resp.headers.keys();
        console.log(resp.headers.get("Authorization"));
        localStorage.setItem('token',resp.headers.get("Authorization"));
      }, error => {
        console.log('oops', error);
      });
  }
}
