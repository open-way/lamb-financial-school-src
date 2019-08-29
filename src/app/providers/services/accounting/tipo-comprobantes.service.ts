import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntityDataService, IResponse } from '@providers/utils';
// import { Observable } from 'rxjs';

@Injectable()
export class TipoComprobantesService extends EntityDataService<IResponse> {
    // public readonly urlv = END_POINTS.accounting.typeVouchers;
    constructor(protected httpClient: HttpClient) {
        // super(httpClient, END_POINTS.accounting.tipoComprobantes);
        super(httpClient, 'accounting/tipo-comprobantes');
    }

    // public getTypeVoucher$(params?: any): Observable<IResponse> {
    //     return this.httpClient.get<IResponse>(this.urlv, { params: params });
    // }
}
