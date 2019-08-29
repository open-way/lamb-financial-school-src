import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityDataService, IResponse } from '@providers/utils';

@Injectable()
export class MyEntityDepartmentsService extends EntityDataService<IResponse> {
    constructor(protected httpClient: HttpClient) {
        super(httpClient, 'setup/my-entity-departments');
    }
}
