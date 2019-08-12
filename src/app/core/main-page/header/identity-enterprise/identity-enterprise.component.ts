import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'lamb-identity-enterprise',
    templateUrl: 'identity-enterprise.component.html',
    styleUrls: ['identity-enterprise.component.scss'],
})

export class IdentityEnterpriseComponent implements OnInit {
    @Input() id: any;
    @Input() name: any;
    @Input() onlyId: boolean;
    constructor() { }
    ngOnInit() { }
}
