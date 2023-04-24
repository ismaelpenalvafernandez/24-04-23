import { Component } from '@angular/core';
@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  alerta=false

  nombre:string ="Ismael"
  
  personas: Persona[]=[
  new Persona("Ismael", 29),
  new Persona("Mario", 30),
  new Persona("David", 17)
  ]
  }
  class Persona{
  constructor(public nombre: string, public edad: number){}
  }
