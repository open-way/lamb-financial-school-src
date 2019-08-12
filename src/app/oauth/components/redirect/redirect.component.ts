import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, flatMap } from 'rxjs/operators';
import { LambOAuthStoreService, UpeuOAuthStoreService } from '../../providers/store';
import { UpeuUserDataService, ValidTokensService } from '@providers/services';
import { OauthUpeuService } from 'app/oauth/providers/oauth';

@Component({
  selector: 'lamb-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {

  constructor(protected route: ActivatedRoute,
              protected router: Router,
              protected lambOAuthStoreService: LambOAuthStoreService,
              protected upeuOAuthStoreService: UpeuOAuthStoreService,

              protected validTokensService: ValidTokensService,
              protected upeuUserDataService: UpeuUserDataService,
              protected oauthUpeuService: OauthUpeuService,
  ) { }

  ngOnInit() {
    this.route.queryParamMap
      .pipe(map((res: any) => res.params))
      .subscribe(this.loadQueryParams.bind(this));

    this.route.fragment
      .subscribe(this.getFragment.bind(this));
  }

  private getFragment(response) {
    if (response) {
      const params = this.paramsToObject(response);
      this.upeuOAuthStoreService.clearAll();
      this.upeuOAuthStoreService.setAccessToken(params.access_token);
      // this.upeuOAuthStoreService.setUsername(params.username);

      this.upeuUserDataService.getAll$()
        .pipe(flatMap((res: any) => this.getValidTokenOfLambApi(res, params)))
        .subscribe(res => {
          if (res.data && res.data.token) {
            this.lambOAuthStoreService.setAccessToken(res.data.token);
            this.router.navigateByUrl('/');
          } else {
            // this.router.navigateByUrl('/');
            this.oauthUpeuService.redirectToFormLogin();
          }
        });
    }
  }

  private getValidTokenOfLambApi(response, params) {
    console.log(response, params);
    const param: any = {
      username: response.username,
      access_token: `${(params.token_type).toUpperCase()} ${params.access_token}`,
    };
    return this.validTokensService.add$(param);
  }


  private loadQueryParams(response) {
    if (Object.keys(response).length !== 0) {
      // Aqui temenos que hacer otra petición para conseguir el access_token.
      // Una vez que adquirimos el acces_token lo almacenamos en el localStorage
      this.lambOAuthStoreService.clearAll();
      this.lambOAuthStoreService.setAccessToken(response.code);
      this.router.navigate(['./']);
    }
  }


  private paramsToObject(response) {
    const result = JSON.parse(
      `{"${response.replace(/&/g, '","').replace(/=/g, '":"')}"}`,
      function (key, value) { return key === '' ? value : decodeURIComponent(value); });
    return result;
  }

}
