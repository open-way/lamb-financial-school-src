import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityDataService, IResponse, END_POINTS } from '../../utils';

@Injectable({ providedIn: 'root' })
export class UpeuUserDataService extends EntityDataService<IResponse> {
    constructor(protected httpClient: HttpClient) {
        super(httpClient, END_POINTS.upeu.me);
    }
}
