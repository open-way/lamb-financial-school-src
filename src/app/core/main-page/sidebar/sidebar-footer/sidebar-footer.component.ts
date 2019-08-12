import { Component, OnInit, Inject } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { TOKEN_LAMB_SHELL_APP_URL } from '../../../../oauth/utils';
import { DOCUMENT } from '@angular/common';
import { environment } from '@env/environment';

@Component({
  selector: 'lamb-sidebar-footer',
  templateUrl: './sidebar-footer.component.html',
  styleUrls: ['./sidebar-footer.component.scss'],
})
export class SidebarFooterComponent implements OnInit {

  public userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              @Inject(TOKEN_LAMB_SHELL_APP_URL) private tokenLambShellAppUrl: string,
              @Inject(DOCUMENT) private document: any,
  ) { }

  ngOnInit() {
  }

  get year() {
    return new Date().getFullYear();
  }
  get devTeam() {
    return 'IASD Norte';
  }

  get version() {
    return '4.0.0';
  }
  get envName() {
    return environment.production ? '' : 'dev';
  }
  get isProd() {
    return false;
  }
  public toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  public goToShellApp() {
    this.document.location.href = this.tokenLambShellAppUrl;
  }
}
