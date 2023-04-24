import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
texto="Hola Mundo"
  constructor() { }

  imprimir(){
    alert(this.texto)
  }
}
