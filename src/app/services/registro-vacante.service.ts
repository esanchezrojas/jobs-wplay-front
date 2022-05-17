import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { GeneralData } from '../config/general-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroVacanteService {

  url:string = GeneralData.URL_REGISTRO;

  constructor(
    private http: HttpClient
  ) { }

    guardarE(datos:any):Observable<any>{
      return this.http.post(`${this.url}`,datos);
    }

    editarE(datos:any){
     return this.http.put(`${this.url}`,datos);
    }

}
