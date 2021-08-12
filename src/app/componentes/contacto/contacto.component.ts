import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  variable = 3;
  nombre = 'Daynover García'
  edad = 19;
  sueldos = [1700, 1600, 1900];
  activo = true;

  esActivo(){
    if(this.activo)
      return 'Trabajador activo';
    else
      return 'Trabajador inactivo';
  }

  UltimoSueldo(){
    let suma=0;
    for(let x=0; x<this.sueldos.length; x++)
    suma+=this.sueldos[x];
    return suma;
  }

  sitio='http://www.google.com';

   
  constructor() { }

  ngOnInit(): void {
  }

}

