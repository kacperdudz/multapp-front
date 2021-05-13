import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private URL:string = 'http://localhost:8080/multapp/'; //TODO make this env var

  constructor(private http: HttpClient) { }

  login(username_:string, password_:string){

    let user: User = {
      username: username_,
      password: password_
    };

    console.log(user);
    console.log(this.URL + "login")

    //const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.http.post<any>(this.URL + "login", user, {observe: "response"}); //TODO this returns the JWT?
 
  }

}
