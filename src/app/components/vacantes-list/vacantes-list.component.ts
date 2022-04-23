import { Component, OnInit } from '@angular/core';
//import { listenerCount } from 'process';
//import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-vacantes-list',
  templateUrl: './vacantes-list.component.html',
  styleUrls: ['./vacantes-list.component.css']
})
export class VacantesListComponent implements OnInit {

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
      ciudad: "Medellín",
      imagen: "https://img.freepik.com/foto-gratis/empleados-estan-sonriendo-trabajando-computadoras_85574-2756.jpg?w=740"
  },
  {
      id: 2,
      area: "Marketing Digital",
      nombreVacante: "Community Manager",
      descripcion: "Encargado de administrar el CEO del sitio web y las estadisticas de Google Analytics ",
      ciudad: "Medellín",
      imagen: "https://img.freepik.com/foto-gratis/empresario-analizando-informe-financiero-empresa-graficos-realidad-aumentada_34141-360.jpg?w=740"
  },
  {
      id: 3,
      area: "Tecnología",
      nombreVacante: "Desarrollador web",
      descripcion: "Encargado de desarrollar las aplicaciones de la intranet corporativa en PHP",
      ciudad: "Medellín",
      imagen: "https://img.freepik.com/foto-gratis/ingeniero-ti-analizando-codigo_1098-21513.jpg?w=740"
  },
  {
      id: 4,
      area: "Contabilidad",
      nombreVacante: "Practicante de contabilidad",
      descripcion: "Encargado de asistir en los registros contables PUC y los libros de mayor",
      ciudad: "Bogotá",
      imagen: "https://img.freepik.com/foto-gratis/contador-calculando-ganancias-graficas-analisis-financiero_74855-4937.jpg?t=st=1650654964~exp=1650655564~hmac=27a76086c94b56d8670d94667fbadedcd7dd8a0209c302610594c7dcf9d1ae69&w=740"
  },
  {
    id: 1,
    area: "Operativa",
    nombreVacante: "Agente de soporte",
    descripcion: "Encargado de brindar el soporte en el chat online a los jugadores de la plataforma",
    ciudad: "Medellín",
    imagen: "https://img.freepik.com/foto-gratis/empleados-estan-sonriendo-trabajando-computadoras_85574-2756.jpg?w=740"
},
{
    id: 2,
    area: "Marketing Digital",
    nombreVacante: "Community Manager",
    descripcion: "Encargado de administrar el CEO del sitio web y las estadisticas de Google Analytics ",
    ciudad: "Medellín",
    imagen: "https://img.freepik.com/foto-gratis/empresario-analizando-informe-financiero-empresa-graficos-realidad-aumentada_34141-360.jpg?w=740"
},
{
    id: 3,
    area: "Tecnología",
    nombreVacante: "Desarrollador web",
    descripcion: "Encargado de desarrollar las aplicaciones de la intranet corporativa en PHP",
    ciudad: "Medellín",
    imagen: "https://img.freepik.com/foto-gratis/ingeniero-ti-analizando-codigo_1098-21513.jpg?w=740"
},
{
    id: 4,
    area: "Contabilidad",
    nombreVacante: "Practicante de contabilidad",
    descripcion: "Encargado de asistir en los registros contables PUC y los libros de mayor",
    ciudad: "Bogotá",
    imagen: "https://img.freepik.com/foto-gratis/contador-calculando-ganancias-graficas-analisis-financiero_74855-4937.jpg?t=st=1650654964~exp=1650655564~hmac=27a76086c94b56d8670d94667fbadedcd7dd8a0209c302610594c7dcf9d1ae69&w=740"
},
{
  id: 1,
  area: "Operativa",
  nombreVacante: "Agente de soporte",
  descripcion: "Encargado de brindar el soporte en el chat online a los jugadores de la plataforma",
  ciudad: "Medellín",
  imagen: "https://img.freepik.com/foto-gratis/empleados-estan-sonriendo-trabajando-computadoras_85574-2756.jpg?w=740"
},
{
  id: 2,
  area: "Marketing Digital",
  nombreVacante: "Community Manager",
  descripcion: "Encargado de administrar el CEO del sitio web y las estadisticas de Google Analytics ",
  ciudad: "Medellín",
  imagen: "https://img.freepik.com/foto-gratis/empresario-analizando-informe-financiero-empresa-graficos-realidad-aumentada_34141-360.jpg?w=740"
},
{
  id: 3,
  area: "Tecnología",
  nombreVacante: "Desarrollador web",
  descripcion: "Encargado de desarrollar las aplicaciones de la intranet corporativa en PHP",
  ciudad: "Medellín",
  imagen: "https://img.freepik.com/foto-gratis/ingeniero-ti-analizando-codigo_1098-21513.jpg?w=740"
},
{
  id: 4,
  area: "Contabilidad",
  nombreVacante: "Practicante de contabilidad",
  descripcion: "Encargado de asistir en los registros contables PUC y los libros de mayor",
  ciudad: "Bogotá",
  imagen: "https://img.freepik.com/foto-gratis/contador-calculando-ganancias-graficas-analisis-financiero_74855-4937.jpg?t=st=1650654964~exp=1650655564~hmac=27a76086c94b56d8670d94667fbadedcd7dd8a0209c302610594c7dcf9d1ae69&w=740"
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
