import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reciboparametros',
  templateUrl: './reciboparametros.component.html',
  styleUrls: ['./reciboparametros.component.css']
})
export class ReciboparametrosComponent {
  nombre: string="";
  edad:number = 0;
  constructor(private activar: ActivatedRoute){
  }
  ngOnInit(){
    this.nombre= this.activar.snapshot.params['nombre']
    this.edad = this.activar.snapshot.params['edad']
  }
  }

