import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { GeneralData } from 'src/app/config/general-data';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = GeneralData.DOMINIO;
  

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
    ) { }

  singin(user:any){
    return this.http.post(`${this.URL}/api/signin`,user);
  }

  isAuth():boolean{
    const token:any = localStorage.getItem('token');
    //const tok = this.jwtHelper.decodeToken(token)
    //console.log(tok, 'este es el token')
    //const isExpired = this.jwtHelper.isTokenExpired(token);
    //console.log(isExpired)
   

    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token') || localStorage.getItem('token') == undefined){
      
      console.log('el token no existe o expiró')
      return false;
    }
    return true;
  }


}


