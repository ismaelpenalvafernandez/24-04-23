import { Component } from '@angular/core';

@Component({
  selector: 'app-onewaybinding',
  templateUrl: './onewaybinding.component.html',
  styleUrls: ['./onewaybinding.component.css']
})
export class OnewaybindingComponent {
  aceptar: boolean= false;

  ngOnInit(): void {
    
  }

  cambiar(){
    this.aceptar=!this.aceptar;
  }
}
