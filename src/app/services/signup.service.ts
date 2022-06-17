import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { GeneralData } from '../config/general-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url:string = GeneralData.DOMINIO;
  constructor(
    private http: HttpClient
  ) { }


  registro(datos:any):Observable<any>{
    return this.http.post(`${this.url}/api/signup`,datos);
  }

}
