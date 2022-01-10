import { Component, OnInit } from '@angular/core';
import { ConversorService } from '../services/conversor.service';


@Component({
  selector: 'app-type-money-one',
  templateUrl: './type-money-one.component.html',
  styleUrls: ['./type-money-one.component.css']
})
export class TypeMoneyOneComponent implements OnInit {

  test: any = [];
  moneda1: string = 'USD';
  moneda2: string = 'EUR';
  conversion: any = [];
  textoDeInput: any = 1
  ultimaOperacion: string = '';
  constructor(private conversorService: ConversorService) { }
  ngOnInit(): void {
    this.buscarMonedas();
    this.convertir();
  }

  buscarMonedas() {
    let i = 0

    let busqueda: string = 'currencies?apiKey=02cb12c5ff41abd89e6f';
    this.conversorService.getMonedas(busqueda).subscribe((data: any) => {
      for (let c in data.results) {
        this.test[i] = data.results[c]
        i++
      }
    });

  }

  convertir() {
    let i = 0
    let busqueda: string = 'convert?q=' + this.moneda1 + '_' + this.moneda2 + ',' + this.moneda2 + '_' + this.moneda1 + '&compact=ultra&apiKey=02cb12c5ff41abd89e6f'
    console.log(busqueda)
    // if(this.ultimaOperacion === busqueda){
    //   this.swap()
    // }
    this.conversorService.getMonedas(busqueda).subscribe((data: any) => {
      for (let c in data) {
        this.conversion[i] = data[c]
        i++
      }
      this.ultimaOperacion = busqueda;
      this.conversion[0] = this.conversion[0] * this.textoDeInput
      this.conversion[1] = this.conversion[1] * this.textoDeInput
    });
  }

  aumentar(){

  }

  swap() {
    let temp = ''
    temp = this.moneda1
    this.moneda1 = this.moneda2
    this.moneda2 = temp
    this.convertir();
  }

}
