import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { GeneralData } from '../config/general-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormApplyService {

  url:string = GeneralData.DOMINIO;

  constructor(
    private http: HttpClient
  ) { }


  list(dato:any):Observable<any>{

    console.log(dato,'en el service')

       
    return this.http.post(`${this.url}/api/formApply`,{dato:dato});
    
    }

    disabled(dato:any):Observable<any>{

      console.log(dato,'en el service des')
  
         
      return this.http.post(`${this.url}/api/disabled`,{dato:dato});
      
      }


}
