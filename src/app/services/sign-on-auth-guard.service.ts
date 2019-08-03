import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SignOnAuthGuardService  implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.userService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/'], {
        queryParams: {
          return : state.url
        }
      });
      return false;
    }
  }
}