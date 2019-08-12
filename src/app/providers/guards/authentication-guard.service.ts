import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UpeuOAuthStoreService } from '../../oauth/providers/store';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuardService implements CanActivate {

  constructor(private router: Router, private upeuOAuthStoreService: UpeuOAuthStoreService,
  ) { }

  canActivate(): boolean {
    // if (!this.lambOAuthStoreService.getAccessToken()) {
    if (!this.upeuOAuthStoreService.getAccessToken()) {
      this.router.navigate(['oauth']);
      return false;
    } else {
      return true;
    }
  }

  /*
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      return this.afAuth.authState
        .take(1)
        .map(user => !!user)
        .do(loggedIn => {
          if (!loggedIn) {
            console.log("access denied")
            this.router.navigate(['/login']);
          }
      })
  }
  */
}
