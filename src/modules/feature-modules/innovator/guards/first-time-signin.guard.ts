import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthenticationStore } from '@modules/stores';


@Injectable()
export class FirstTimeSigninGuard implements CanActivateChild {

  constructor(
    private router: Router,
    private authenticationStore: AuthenticationStore
  ) { }

  canActivateChild(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<boolean> {

    if (this.authenticationStore.isValidUser()) {

      // Don't allow to access First Time Signin, if already has been done.
      if (!['first-time-signin', 'innovation-transfer-acceptance', ':id'].includes(activatedRouteSnapshot.routeConfig?.path || '')) {
        return of(true);
      }

      this.router.navigate(['/innovator/dashboard']);
      return of(false);

    } else {

      // User has pending innovation transfers and a localStorage item that states that he pressed an email?
      if (this.authenticationStore.hasInnovationTransfers()) {

        if (['innovation-transfer-acceptance', ':stepId'].includes(activatedRouteSnapshot.routeConfig?.path || '')) {
          return of(true);
        }

        this.router.navigate([`/innovator/innovation-transfer-acceptance`]);
        return of(false);

      }

      // User does not have pending innovation transfers.
      // It's mandatory to proceed to First Time Signin on the first time.
      if (['first-time-signin', ':id'].includes(activatedRouteSnapshot.routeConfig?.path || '')) {
        return of(true);
      }

      this.router.navigate(['/innovator/first-time-signin']);
      return of(false);


    }

  }

}
