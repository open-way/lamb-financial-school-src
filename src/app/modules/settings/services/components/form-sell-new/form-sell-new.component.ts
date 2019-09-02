import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map, debounceTime, distinctUntilChanged, tap, switchMap, filter } from 'rxjs/operators';
import { NaturalLegalPersonsService, TipoComprobantesService } from '@providers/services';

@Component({
  selector: 'lamb-form-sell-new',
  templateUrl: './form-sell-new.component.html',
  styleUrls: ['./form-sell-new.component.scss']
})
export class FormSellNewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  public saleServiceForm: FormGroup;
  public tipoComprobantes: any[] = [];
  public loadingSearchCliente: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private tipoComprobantesService: TipoComprobantesService,
    private naturalLegalPersonsService: NaturalLegalPersonsService,
  ) { }

  ngOnInit() {
    this.loadingSearchCliente = false;
    this.buildForm();
    this.getMasters();
  }


  formatterCliente = (x: { num_documento: string ,nom_persona: string, id_tipodocumento: string, id_persona: string }) => {
    if (x.id_persona) {
      // this.onValidarRuc(x.ruc, x.id_persona);
      // this.getParentDocuments(x);
      return `${x.nom_persona} (${x.num_documento})`;
    }
    return '';
  }

  searchCliente = (text$: Observable<string>) => {
    return text$
      .pipe(
        // filter(textSearch => textSearch.trim() !== ''),
        // filter(textSearch => textSearch.length >= 2),
        filter(textSearch => textSearch.length >= 0),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => this.loadingSearchCliente = true),
        map(textSearch => (textSearch && textSearch.toLowerCase()) || ''),
        switchMap(this.loadPersons.bind(this)),
        tap(() => this.loadingSearchCliente = false),
        map((items) => {
          return items;
        }),
      );
  }

  private loadPersons(term: string): Observable<any> {
    // this.proveedorValida = '0';
    const params = { text_search: term };
    if (term === '') {
      return new Observable(observer => {
        return observer.next([]);
      });
    } else {
      return this.naturalLegalPersonsService.getWithQuery$(params)
        .pipe(map(res => {
          if (term.length === 11 && res.data.length === 0) {
            const msj = 'El cliente no existe. Enter para crearlo...';
            return [{
              ruc: term, id_persona: '0', rasonsocial: msj,
            }];
          } else {
            return (res && res.data) || [];
          }
        }));
    }
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
