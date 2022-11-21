import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token:any;
  constructor(
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkSession(route);
  }
  
  checkSession(route:any) {
    this.token = localStorage.getItem('user');
    if (this.token != undefined) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  } //Check login here
  
}
