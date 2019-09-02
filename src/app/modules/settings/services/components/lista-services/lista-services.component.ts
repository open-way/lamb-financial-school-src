import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'lamb-lista-services',
  templateUrl: './lista-services.component.html',
  styleUrls: ['./lista-services.component.scss']
})
export class ListaServicesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
