import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService {

  constructor() { }

  gettoken(): string{  
    return localStorage.getItem("token");  
    } 
  
}
