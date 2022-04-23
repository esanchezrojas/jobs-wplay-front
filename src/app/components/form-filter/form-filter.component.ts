import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: ['./form-filter.component.css']
})
export class FormFilterComponent implements OnInit {
 
/*
  vacantes: any[] = [];
  page = 1;
  totalVacantes = 0;
  */
  
  filterPost = '';
  page = 1;
  vacantes = [
    {
      id: 1,
      area: "Operativa",
      nombreVacante: "Agente de soporte",
      descripcion: "Encargado de brindar el soporte en el chat online a los jugadores de la plataforma",
      ciudad: "Medellín"
  },
  {
      id: 2,
      area: "Marketing Digital",
      nombreVacante: "Community Manager",
      descripcion: "Encargado de administrar el CEO del sitio web y las estadisticas de Google Analytics ",
      ciudad: "Medellín"
  },
  {
      id: 3,
      area: "Tecnología",
      nombreVacante: "Desarrollador web",
      descripcion: "Encargado de desarrollar las aplicaciones de la intranet corporativa en PHP",
      ciudad: "Medellín"
  },
  {
      id: 4,
      area: "Contabilidad",
      nombreVacante: "Practicante de contabilidad",
      descripcion: "Encargado de asistir en los registros contables PUC y los libros de mayor",
      ciudad: "Bogota"
  },
  {
    id: 1,
    area: "Operativa",
    nombreVacante: "Agente de soporte",
    descripcion: "Encargado de brindar el soporte en el chat online a los jugadores de la plataforma",
    ciudad: "Medellín"
},
{
    id: 2,
    area: "Marketing Digital",
    nombreVacante: "Community Manager",
    descripcion: "Encargado de administrar el CEO del sitio web y las estadisticas de Google Analytics ",
    ciudad: "Medellín"
},
{
    id: 3,
    area: "Tecnología",
    nombreVacante: "Desarrollador web",
    descripcion: "Encargado de desarrollar las aplicaciones de la intranet corporativa en PHP",
    ciudad: "Medellín"
},
{
    id: 4,
    area: "Contabilidad",
    nombreVacante: "Practicante de contabilidad",
    descripcion: "Encargado de asistir en los registros contables PUC y los libros de mayor",
    ciudad: "Bogota"
}

  ];
  
  totalVacantes = this.vacantes.length;
  
  constructor() { }
  ngOnInit(): void {
    //this.getVacantes();
    this.vacantes;
    console.log(this.vacantes)
    this.openAdd();
    
  }

  openAdd(){
    console.log('presionando boton')
  }

  /*
  getVacantes(){

    this.dataService.getListado(3,this.page+0)
    .subscribe((response:any)=>{
      this.totalVacantes = response.count;
      response.results.forEach((result: any) => {
        this.dataService.getOnly(result.name) 
        .subscribe((unicResponse:any)=>{
            this.vacantes.push(unicResponse)
            console.log(this.vacantes); 
        });
      });
      });
     }
     */


}
