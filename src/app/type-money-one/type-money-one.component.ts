import { Component, OnInit } from '@angular/core';
import { find } from 'rxjs';
import { ConversorService } from '../services/conversor.service';


@Component({
  selector: 'app-type-money-one',
  templateUrl: './type-money-one.component.html',
  styleUrls: ['./type-money-one.component.css']
})
export class TypeMoneyOneComponent implements OnInit {

  arrayMonedas: any = [];
  arrayConversiones: any = [];
  posicion: number = -1
  moneda1: string = 'USD';
  moneda2: string = 'EUR';
  valorMoneda: number = 0
  conversion: any = [];
  multiplicacion: any = 1
  ultimaOperacion: string = '';
  constructor(private conversorService: ConversorService) { }
  ngOnInit(): void {
    this.buscarMonedas(this.moneda1);
  }

  buscarMonedas(valor: string) {
    this.conversorService.getMonedas(valor).subscribe((data: any) => {
      this.arrayMonedas = Object.keys(data.data)
      this.arrayConversiones = Object.values(data.data)

      const condicion = (element: string) => element === this.moneda2;
      this.posicion =Object.keys(data.data).findIndex(condicion);
      this.valorMoneda=this.arrayConversiones[this.posicion]
      this.multiplicar()
    });

  }

  multiplicar() {
      this.arrayConversiones[this.posicion] = this.valorMoneda * this.multiplicacion
  }

  swap() {
    let temp = this.moneda1
    this.buscarMonedas(this.moneda2);
    this.moneda1 = this.moneda2
    this.moneda2 = temp
  }

}
