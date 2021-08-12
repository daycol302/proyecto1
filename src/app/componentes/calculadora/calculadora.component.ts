import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  valor1: number;
  valor2: number;
  operacion: string = "ninguna";
  resultado: number;
  
  ngOnInit(): void {
  }

}
