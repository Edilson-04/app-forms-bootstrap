import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calculo-imc',
  templateUrl: './form-calculo-imc.component.html',
  styleUrls: ['./form-calculo-imc.component.css']
})
export class FormCalculoImcComponent {

  objImcc = {
    nombre: null,
    peso: null,
    talla: null,
    resultado: 0
  }

  mostrarResultado = false;

  listaPacientes: Paciente = [];

  calcularImc() {
    let tallam = Number(this.objImcc.talla) / 100;
    let peso = Number(this.objImcc.peso);
    this.objImcc.resultado = tallam / (peso * peso);
    this.listaPacientes.push({
      id: 1, nombre: String(this.objImcc.nombre), imc: this.objImcc.resultado
    });
    this.mostrarResultado = true
  }

}

type Paciente = Array<{ id: number, nombre: String, imc: number }>
