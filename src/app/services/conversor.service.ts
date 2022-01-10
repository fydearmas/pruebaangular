import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ConversorService {
private url: string = "https://free.currconv.com/api/v7";
  constructor(private http : HttpClient) {}

  getMonedas(name: string){
    return this.http.get(`${this.url}/${name}`);
  }
}
