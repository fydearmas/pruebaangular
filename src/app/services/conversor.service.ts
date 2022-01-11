import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConversorService {
// private url: string = "https://free.currconv.com/api/v7";
private url: string = "https://freecurrencyapi.net/api/v2/latest?apikey=9d3ac580-71af-11ec-9a82-4592cef72328&base_currency=";
//private url: string = "https://freecurrencyapi.net/api/v2/latest?apikey=ee28ec60-7166-11ec-8910-6797b5f3621&base_currency=";
  constructor(private http : HttpClient) {}

  getMonedas(name: string){
    return this.http.get(`${this.url}${name}`);
  }
}
