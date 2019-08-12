import {Component, OnInit, Inject, ElementRef} from '@angular/core';
import {UserModulesService} from '@providers/services';
import {map} from 'rxjs/operators';
import {TOKEN_LAMB_CREDENTIALS_APP, CredentialsApp} from '../../../../oauth/utils';
import {NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'lamb-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss'],
})
export class SidebarContentComponent implements OnInit {
  isSingleClick = false;
  public items = [];
  constructor(@Inject(TOKEN_LAMB_CREDENTIALS_APP) protected tokenLambCredentialsApp: CredentialsApp,
    protected element: ElementRef,
    protected sidebarService: NbSidebarService,
    private userModulesService: UserModulesService) { }

  ngOnInit() {
    this.getUserModules();
  }

  private getUserModules() {
    this.userModulesService.getChildrenOfIdModule$(this.tokenLambCredentialsApp.client_id)
      .pipe(map(response => response.data))
      .subscribe(this.loadUserModules.bind(this));
  }

  private loadUserModules(response) {
    this.items = response.items;
  }

  public onClickMenu(event): void {
    const menu = this.element.nativeElement.querySelector('lamb-menu');
    if (menu && menu.contains(event.target)) {
      let link = event.target;
      const linkChildren = ['span', 'i'];
      // Si hacemos click en span - Obtenemos el link.
      if (linkChildren.indexOf(link.tagName.toLowerCase()) !== -1 && link.parentNode) {
        link = event.target.parentNode;
      }
      // Nosotros solo expandimos si un item tiene hijos.
      if (link && link.nextElementSibling && link.nextElementSibling.classList.contains('lamb-menu-items')) {
        this.sidebarService.toggle(true, 'lateral-menu-sidebar');
        this.sidebarService.expand('lateral-menu-sidebar');
      }
      if (this.isSingleClick && link && link.href) {
        const lin: string[] = link.href.split('/#');
        if (lin.length < 2) {
          this.sidebarService.toggle(true, 'lateral-menu-sidebar');
        }
      }
    }
  }

}
