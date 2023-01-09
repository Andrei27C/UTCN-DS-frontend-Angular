import {AuthenticationService} from '../services/authentication/authentication.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/']).then(() => {});
    }

    const currentUser = this.authService.getCurrentUser();
    console.log(currentUser?.role);

    const role = currentUser?.role;

    if (role) {
      const roles = route.data["role"];
      if (roles && roles.indexOf(role) == -1) {
        if (role == "admin") {
          this.router.navigate(['/User']).then(() => {});
        } else if (role == "user") {
          this.router.navigate(['/User-Dashboard']).then(() => {});
        }

      }
    }

    return true;
  }
}
