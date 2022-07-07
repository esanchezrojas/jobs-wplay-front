
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { GeneralData } from '../config/general-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroVacanteService {

  url:string = GeneralData.DOMINIO;

  constructor(
    private http: HttpClient
  ) { }

     guardarT(datos:any):Observable<any>{

       
    return this.http.post(`${this.url}/api/publicVacantes`,datos);
    
    }


    upload(datos:any):Observable<any>{
      return this.http.post(`${this.url}/api/upload`,datos);
    }


    forgot(datos:any):Observable<any>{

        return this.http.post(`${this.url}/api/recuperar`,datos);
      
      }

      

    


    editarE(datos:any){
     return this.http.put(`${this.url}`,datos);
    }

}