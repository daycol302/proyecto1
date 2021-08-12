import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  valor1: any;
  valor2: any;
  edad: any;
  algebra: any;
  quimica: any;
  fisica: any;
  
  public user: any;

  constructor() {
    this.user ={
      nombre: '',
      apellido: '',
    };
   }

  edadOp(){
    if (this.edad < 18){
      return 'Es menor de edad';
    }else{
      return 'Es mayor de edad';
    }
  }

  materiaAlgebra(){
     if(this.algebra >= 3  && this.algebra <= 5){
        return "Si ha pasado";
     }else{
        return "No ha pasado";
     }
  }
  materiaQuimica(){
    if(this.quimica >= 3 && this.quimica <= 5){
       return "Si ha pasado";
    }else{
       return "No ha pasado";
    }
 }
 materiaFisica(){
  if(this.fisica >= 3 && this.fisica <= 5){
     return "Si ha pasado";
  }else{
     return "No ha pasado";
  }
}
resultado(){
  let result = this.fisica + this.quimica + this.algebra;
  if (result >= 9 && result <= 15){
    return "¡Estudiante aprobado!";
    }else{
      return "¡Estudiante Desaprobado!"
    }
}
  ngOnInit(): void {
  }

}