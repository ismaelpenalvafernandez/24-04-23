import { Component } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {
  aceptar: boolean= false;

  ngOnInit(): void {
    
  }

  cambiar(){
    this.aceptar=!this.aceptar;
  }
}
