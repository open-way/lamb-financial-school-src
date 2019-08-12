import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityDataService, IResponse, END_POINTS } from '@providers/utils';

@Injectable()
export class UsersThemesService extends EntityDataService<IResponse> {
    constructor(protected httpClient: HttpClient) {
        super(httpClient, END_POINTS.setup.usersThemes);
    }
}
