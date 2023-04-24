import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recibounparametro',
  templateUrl: './recibounparametro.component.html',
  styleUrls: ['./recibounparametro.component.css']
})
export class RecibounparametroComponent {
  id:number = 0;
constructor(private activar: ActivatedRoute){
}
ngOnInit(){
  this.id = this.activar.snapshot.params['id']
}
}
