import { Component, OnInit } from '@angular/core';
import { ConversorService } from '../services/conversor.service';

@Component({
  selector: 'app-historical-currency-exchange',
  templateUrl: './historical-currency-exchange.component.html',
  styleUrls: ['./historical-currency-exchange.component.css']
})
export class HistoricalCurrencyExchangeComponent implements OnInit {
  moneda: string = '';
  desde: any = '';
  hasta: any = '';
  arrayMonedas: any = [];
  fecha = new Date();
  fechaActual: any = ''
  constructor(private conversorService: ConversorService) { }

  ngOnInit(): void {
    let mes = ''
    let dia = ''
    if (this.fecha.getMonth() + 1 < 10) {
      mes = `0${this.fecha.getMonth() + 1}`
    }
    if (this.fecha.getDay() < 10) {
      dia = `0${this.fecha.getDay()}`
    }
    this.fechaActual = `${this.fecha.getFullYear()}-${mes}-${dia}`
    this.buscarMonedas(this.moneda)
  }
  buscarMonedas(valor: string) {
    this.conversorService.getMonedas(valor).subscribe((data: any) => {
    });

  }

  historico() {
    if (this.desde === '') {
      this.desde = this.fechaActual;
    }
    if (this.hasta === '') {
      this.hasta = this.fechaActual;
    }
    this.conversorService.getHistorico(this.moneda, this.desde, this.hasta).subscribe((data: any) => {
      console.log(Object.values(data.data))
    });

  }
}
