import { Component, OnInit } from '@angular/core';
import { OauthLambService, OauthUpeuService } from '../../providers/oauth';
import { UpeuUserDataService } from '@providers/services';
import { UpeuOAuthStoreService } from 'app/oauth/providers/store';

@Component({
  selector: 'lamb-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public user: any;

  constructor(private oauthLambService: OauthLambService,
              private oauthUpeuService: OauthUpeuService,
              private upeuUserDataService: UpeuUserDataService,
              private upeuOAuthStoreService: UpeuOAuthStoreService,
  ) { }

  ngOnInit() {
    this.loadDataUser();
  }

  private loadDataUser() {

    if (this.upeuOAuthStoreService.getAccessToken()) {
      this.upeuUserDataService.getWithQuery$({})
        .subscribe(this.loadUpeuMasters.bind(this));
    }
  }

  public onChangeUser() {
    this.upeuOAuthStoreService.clearAll();
    this.oauthUpeuService.redirectToFormLogin();
  }

  private loadUpeuMasters(response) {
    this.user = response;
    this.user['full_name'] = `${response.first_name} ${response.last_name}`;
  }


  public logginWithLambAuth() {
    this.oauthLambService.getAuthorizationCode();
  }

  public logginWithErpAuth() {
    this.oauthUpeuService.getImplicit();
  }
}

