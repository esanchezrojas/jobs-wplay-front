import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

 

  constructor(private http: HttpClient) { }

  
  getListado() {


    return this.http.get(`http://localhost:3000/api/publicVacantes/`);
  }
 


  //get more  data
  getOnly(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
