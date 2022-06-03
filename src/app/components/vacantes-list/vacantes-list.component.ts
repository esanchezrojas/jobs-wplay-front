import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../../services/data.service';
import { GeneralData } from 'src/app/config/general-data';

@Component({
  selector: 'app-vacantes-list',
  templateUrl: './vacantes-list.component.html',
  styleUrls: ['./vacantes-list.component.css']
})
export class VacantesListComponent implements OnInit {

  
  vacantes: any[] = [];
  page = 1;
  totalVacantes = 0;
  
 categorias = GeneralData.CATEGORIAS;
 ciudades = GeneralData.CIUDADES_LIST;
  

  
  filterPost = '';
  filterC = '';
  
  
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
    ) { }
  ngOnInit(): void {
    this.getVacantes();
       
  }

  
  datos(categoria:any){
    this.filterC = categoria;
    console.log(this.filterC)
  }
  
  getVacantes(){

    this.dataService.getListado()
    .subscribe((res:any)=>{
      let cont = res.length;
      this.totalVacantes = res.length;
      this.vacantes = res;
      console.log(res)
      console.log(cont)
     /* response.results.forEach((result: any) => {
        this.dataService.getOnly(result.name) 
        .subscribe((unicResponse:any)=>{
            this.vacantes.push(unicResponse)
            console.log(this.vacantes); 
        });
      });*/
      });
     }
     

}
