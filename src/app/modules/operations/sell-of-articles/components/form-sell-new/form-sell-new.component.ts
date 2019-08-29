import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { TipoComprobantesService } from '@providers/services';

@Component({
  selector: 'lamb-form-sell-new',
  templateUrl: './form-sell-new.component.html',
  styleUrls: ['./form-sell-new.component.scss']
})
export class FormSellNewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  public saleServiceForm: FormGroup;
  public tipoComprobantes: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private tipoComprobantesService: TipoComprobantesService,
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getMasters();
  }

  public getMasters() {
    this.tipoComprobantesService.getWithQuery$({ tipo: 'ventas' })
      .pipe(
        map(res => res.data),
        takeUntil(this.destroy$),
      )
      .subscribe(this.loadTipoComprobantes.bind(this));
  }

  private loadTipoComprobantes(data) {
    this.tipoComprobantes = data || [];
    const defaultSerlected = this.tipoComprobantes.filter(res => res.default_selected === '1')[0];
    if (defaultSerlected) {
      this.saleServiceForm.patchValue({ id_comprobante: defaultSerlected.id_comprobante || '' });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public buildForm() {
    const controls = {
      id_comprobante: ['', Validators.required]
    };
    this.saleServiceForm = this.formBuilder.group(controls);
  }

}
