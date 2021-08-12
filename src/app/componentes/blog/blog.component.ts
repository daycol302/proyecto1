import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arreglo1 = [10, 20, 30, 40, 50];
  estado = true;
  dia = 10;
  edad=19;

  mayorEdad(): boolean{
    if(this.edad >= 18)
      return true;
  else
  return false;
}

  public datos : any; 
  constructor() {
    this.datos ={
      numero: ''
    }
   }

  ngOnInit(): void {
  }

}
