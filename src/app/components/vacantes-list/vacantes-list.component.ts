import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-vacantes-list',
  templateUrl: './vacantes-list.component.html',
  styleUrls: ['./vacantes-list.component.css']
})
export class VacantesListComponent implements OnInit {

  
  vacantes: any[] = [];
  page = 1;
  totalVacantes = 0;
  
 
  

  
  filterPost = '';
  
  
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
    ) { }
  ngOnInit(): void {
    this.getVacantes();
    
    


   
    
  }

  

  
  getVacantes(){

    this.dataService.getListado()
    .subscribe((response:any)=>{
      let cont = response.length;
      this.totalVacantes = response.length;
      this.vacantes = response;
      console.log(response)
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
