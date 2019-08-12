import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ManageAutorizationService } from '@providers/guards/manage-autorization.service';
import { StoreUserActionsService } from '@providers/guards/store-user-actions.service';
import { AccessService } from '@providers/services';

@Injectable()
export class AutorizationGuardService implements CanActivate {
  constructor(private storeUserActionsService: StoreUserActionsService,
    private accessService: AccessService,
    private manageAutorizationService: ManageAutorizationService,
    private location: Location,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    const idModule = route.data.module;

    /**
     * Load new actions for module os users
     */
    if (idModule) {
      this.loadActions(idModule).
        subscribe(this.loadActionsInStore.bind(this));

      return this.manageAutorizationService.isAutorizedInit()
        .pipe(map((res: boolean) => {
          if (!res) {
            this.location.back();
          }
          return res;
        }));
    }
    return of(true);
  }

  private loadActionsInStore(response) {
    const actions = response && response.data && response.data.items || [];
    this.storeUserActionsService.setUserActions(actions);
  }

  private loadActions(idModule: string): Observable<any> {
    return this.accessService.getActionsOfIdModule$(idModule);
  }
}
