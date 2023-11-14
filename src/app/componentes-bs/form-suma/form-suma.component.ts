import { Component } from '@angular/core';

@Component({
  selector: 'app-form-suma',
  templateUrl: './form-suma.component.html',
  styleUrls: ['./form-suma.component.css']
})
export class FormSumaComponent {

  //creamos un objeto para la suma 
  objSuma = {
    numero1: null,
    numero2: null,
    resultado: 0,
  }
  mostraresultado = false;

  //creamos una funcion para mostrar y calcular la suma
  calcularSuma() {
    this.objSuma.resultado = Number(this.objSuma.numero1) + Number(this.objSuma.numero2)
    this.mostraresultado = true
  }



}
