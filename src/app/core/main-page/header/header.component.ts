import { Component, OnInit, Inject, Input, OnDestroy } from '@angular/core';
import { NbSidebarService, NbMenuService, NbMediaBreakpointsService } from '@nebular/theme';
import { UserDataService } from '@providers/services';
import { map, filter, takeUntil } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { TOKEN_LAMB_SHELL_APP_URL } from '../../../oauth/utils';
import { LambOAuthStoreService, UpeuOAuthStoreService } from '../../../oauth/providers/store';
import { Router } from '@angular/router';
import { UsersThemesService, UpeuUserDataService } from '@providers/services';
import { NbThemeService } from '@nebular/theme';
import { NbJSThemeOptions } from '@nebular/theme/services/js-themes/theme.options';
import { environment } from '@env/environment';
import { StateService } from 'app/core/shared/state.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'lamb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public userPictureOnly = false;
  public user: any;

  public theme: NbJSThemeOptions;

  public userMenu = [{ title: 'Profile', data: 'profile' }];
  public enterprise: any;
  @Input() position = 'normal';

  constructor(private sidebarService: NbSidebarService, @Inject(DOCUMENT) private document: any,
              @Inject(TOKEN_LAMB_SHELL_APP_URL) private tokenLambShellAppUrl: string, private nbMenuService: NbMenuService,
              private lambOAuthStoreService: LambOAuthStoreService, protected router: Router,
              private userDataService: UserDataService, private upeuUserDataService: UpeuUserDataService,
              private usersThemesService: UsersThemesService, private upeuOAuthStoreService: UpeuOAuthStoreService,
              private themeService: NbThemeService, private stateService: StateService,
              private breakpointService: NbMediaBreakpointsService,
  ) { }

  ngOnInit() {
    this.getMasters();
    this.subscribeMenuProfile();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private subscribeMenuProfile() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'context-menu-profile'),
        map(({ item: { data } }) => data),
        takeUntil(this.destroy$),
      )
      .subscribe(data => {
        if (data === 'log-out') {
          // this.logout();
        }
      });

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);
  }

  public onLogout(): boolean {
    this.logout();
    return false;
  }

  private logout() {
    this.lambOAuthStoreService.clearAll();
    this.router.navigate(['./oauth']);
  }

  private getMasters() {
    this.userDataService.getAll$()
      .pipe(
        map(response => response.data),
        takeUntil(this.destroy$),
      )
      .subscribe(this.loadLambMasters.bind(this));

    /** Si el tiene un token de upeu significa que se logeo por upeu y debe pedir el usuario de allí.  */
    if (this.upeuOAuthStoreService.getAccessToken()) {
      this.upeuUserDataService.getWithQuery$({})
        .subscribe(this.loadUpeuMasters.bind(this));
    }

    this.usersThemesService.getWithQuery$({ id_modulo: environment.lambClientCredentials.client_id })
      .pipe(map(ress => ress.data),
        takeUntil(this.destroy$),
      )
      .subscribe(this.loadUsersThemes.bind(this));
  }

  public loadUsersThemes(response) {
    // this.themeService.changeTheme(response.nombre_tema);
    // const orientationSidebar = this.getOrientationSidebar(response.sidebar);
    // this.stateService.setSidebarState(orientationSidebar);
  }

  private getOrientationSidebar(sidebar) {
    if (sidebar === 'right') {
      return {
        name: 'Right Sidebar',
        icon: 'nb-layout-sidebar-right',
        id: 'right',
        selected: true,
      };
    } else if (sidebar === 'left') {
      return {
        name: 'Left Sidebar',
        icon: 'nb-layout-sidebar-left',
        id: 'left',
        selected: true,
      };
    }
  }

  private loadLambMasters(response) {
    this.enterprise = response;
  }

  private loadUpeuMasters(response) {
    this.user = response;
    this.user['full_name'] = `${response.first_name} ${response.last_name}`;
  }

  public toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  public goToShellApp() {
    this.document.location.href = this.tokenLambShellAppUrl;
  }
}
