import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap} from "rxjs/operators"; //recibir y regresar un observable

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais !: Country; // ! pais puede ser nulo, se  trata como si tiene data

  constructor( private activateRoute : ActivatedRoute,
               private paisService : PaisService
    ) { }

  //suscribirse a cualquier cambio de url 
  //el componente ya esta inicializado
  //pipe operador de rxjs
  ngOnInit(): void {

    this.activateRoute.params
    .pipe(
      //operadores que trabajaran con el producto del 
      //observable params

      switchMap( ( param ) => this.paisService.getPaisporAlpha(param.id))
      ,tap(console.log) //imprime la respuesta anterior
    )
    .subscribe ( pais =>
      {
        this.pais = pais;
      })


    /* this.activateRoute.params
    .subscribe( ({id}) =>
      {
        console.log(id); // ID del pais
        this.paisService.getPaisporAlpha(id)
        .subscribe( pais =>
          {
            console.log(pais);
          })
      }) */


  }

}
