import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GeneralData } from 'src/app/config/general-data';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 url= GeneralData.DOMINIO;

  constructor(private http: HttpClient) { }

  static handleError(error: HttpErrorResponse): any {
    console.log(error);
    return throwError(() => new Error('Ha ocurrido un error.'))
    //return throwError('Ha ocurrido un error.');
  }

  
  getListado() {


    return this.http.get(`${this.url}/api/publicVacantes/`).pipe(
      catchError(DataService.handleError));
  }
 
  getListas(){

    return this.http.get(`${this.url}/api/listas/`);

  }

}
