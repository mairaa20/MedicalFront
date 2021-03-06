import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})


export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthService,private router: Router,) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const valid = this.authService.isAuthenticated();
    if (valid) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

}
