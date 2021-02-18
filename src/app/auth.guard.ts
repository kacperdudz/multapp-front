import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardServiceService } from './auth-guard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private Authguardservice: AuthGuardServiceService, private router: Router) {}

  canActivate(): boolean {  
    if (this.Authguardservice.gettoken() != '1') {  
        this.router.navigateByUrl("/login");  
        return false;
    }  
    return true;
} 
  
}
