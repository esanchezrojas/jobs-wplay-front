import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { GeneralData } from 'src/app/config/general-data';



@Injectable({
  providedIn: 'root'
})
export class DataService {

 url= GeneralData.DOMINIO;

  constructor(private http: HttpClient) { }

  

  
  getListado() {

    //let params = new HttpParams().append('page','2');
    //params = params.append('nombre','Edwin');

    return this.http.get(`${this.url}/api/publicVacantes/`)
  }
 
  getListas(){

    return this.http.get(`${this.url}/api/listas/`);

  }


  

}
