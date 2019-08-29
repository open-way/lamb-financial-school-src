import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityDataService, IResponse } from '@providers/utils';

const END_POINT = 'setup/my-entities';

@Injectable()
export class MyEntitiesService extends EntityDataService<IResponse> {
    constructor(protected httpClient: HttpClient) {
        super(httpClient, END_POINT);
    }

}
