import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino : string = "";
  hayError : boolean = false;
  capitales : Country[] = [];

  constructor(private capitalService : PaisService) { }

  buscar( termino : string)
  {
    this.hayError = false;
    this.termino = termino;

    this.capitalService.buscarCapital(this.termino)
    .subscribe( capitales =>
      {
        console.log(capitales);
        this.capitales = capitales;
      }, err =>
      {
        console.info(err);
        this.hayError = true;
        this.capitales = [];
      });

  }

  sugerencias( termino : string)
  {
    this.hayError = false;
    //TODO crear sugerencias
  }

}
