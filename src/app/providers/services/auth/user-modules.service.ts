import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { END_POINTS, EntityDataService, IResponse } from '../../utils';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserModulesService extends EntityDataService<IResponse> {
    constructor(protected httpClient: HttpClient) {
        super(httpClient, END_POINTS.userModules);
    }

    public getChildrenOfIdModule$(idModule: string): Observable<IResponse> {
        return this.httpClient.get<IResponse>(`${this.endPoint}/${idModule}/children`);
    }
}
