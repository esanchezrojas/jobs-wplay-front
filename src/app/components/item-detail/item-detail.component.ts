import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../../services/data.service';
import { VacantesListComponent } from '../vacantes-list/vacantes-list.component';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  
  vacantes: any[] = [];
  
  totalVacantes = 0;
  

  /*
  vacantes = [
    {
      id: 0,
      area: "Operativa",
      nombreVacante: "Agente de soporte",
      descripcion: "Encargado de brindar el soporte en el chat online a los jugadores de la plataforma",
      ciudad: "Medellín",
      imagen: "https://drive.google.com/uc?id=10rOP6RR1l0feMS0G6UyQDixE1pEa7MLS",
      proposito: "Proteger la estabilidad económica de la comunidad",
      responsabilidades: ["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes","Manejo de herramientas web"],
      conocimientos: "Estudiante de últimos semestres de contaduría pública. Nivel intermedio de excel Conocimiento basico normatividad fiscal y contable",
      horario: "Lunes a Viernes 8am - 5pm",
      tipo_de_contrato: "Indefinido",
      beneficios:["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes","Manejo de herramientas web"]
  },
  {
      id: 1,
      area: "Marketing Digital",
      nombreVacante: "Community Manager",
      descripcion: "Encargado de administrar el CEO del sitio web y las estadisticas de Google Analytics ",
      ciudad: "Medellín",
      imagen: "https://img.freepik.com/foto-gratis/empresario-analizando-informe-financiero-empresa-graficos-realidad-aumentada_34141-360.jpg?w=740",
      proposito: "Proteger la estabilidad económica de la comunidad",
      responsabilidades: ["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes"],
      conocimientos: "Estudiante de últimos semestres de contaduría pública. Nivel intermedio de excel Conocimiento basico normatividad fiscal y contable",
      horario: "Lunes a Viernes 8am - 5pm",
      tipo_de_contrato: "Indefinido",
      beneficios:["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes","Manejo de herramientas web"]
  },
  {
      id: 2,
      area: "Tecnología",
      nombreVacante: "Desarrollador web",
      descripcion: "Encargado de desarrollar las aplicaciones de la intranet corporativa en PHP",
      ciudad: "Medellín",
      imagen: "https://drive.google.com/uc?id=1m8WFw86NQYipYOCparyMvnR4Kk3MQMIF",
      proposito: "Proteger la estabilidad económica de la comunidad",
      responsabilidades: ["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes"],
      conocimientos: "Estudiante de últimos semestres de contaduría pública. Nivel intermedio de excel Conocimiento basico normatividad fiscal y contable",
      horario: "Lunes a Viernes 8am - 5pm",
      tipo_de_contrato: "Indefinido",
      beneficios:["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes","M"]
  },
  {
      id: 3,
      area: "Contabilidad",
      nombreVacante: "Practicante de contabilidad",
      descripcion: "Encargado de asistir en los registros contables PUC y los libros de mayor",
      ciudad: "Bogotá",
      imagen: "https://img.freepik.com/foto-gratis/contador-calculando-ganancias-graficas-analisis-financiero_74855-4937.jpg?t=st=1650654964~exp=1650655564~hmac=27a76086c94b56d8670d94667fbadedcd7dd8a0209c302610594c7dcf9d1ae69&w=740",
      proposito: "Proteger la estabilidad económica de la comunidad",
      responsabilidades: ["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes"],
      conocimientos: "Estudiante de últimos semestres de contaduría pública. Nivel intermedio de excel Conocimiento basico normatividad fiscal y contable",
      horario: "Lunes a Viernes 8am - 5pm",
      tipo_de_contrato: "Indefinido",
      beneficios:["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes","Manejo de herramientas web"]
  },
  {
    id: 4,
    area: "Operativa",
    nombreVacante: "Agente de soporte",
    descripcion: "Encargado de brindar el soporte en el chat online a los jugadores de la plataforma",
    ciudad: "Medellín",
    imagen: "https://img.freepik.com/foto-gratis/empleados-estan-sonriendo-trabajando-computadoras_85574-2756.jpg?w=740",
    proposito: "Proteger la estabilidad económica de la comunidad",
    responsabilidades: ["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes"],
      conocimientos: "Estudiante de últimos semestres de contaduría pública. Nivel intermedio de excel Conocimiento basico normatividad fiscal y contable",
      horario: "Lunes a Viernes 8am - 5pm",
      tipo_de_contrato: "Indefinido",
      beneficios:["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes","Manejo de herramientas web"]
},
{
    id: 5,
    area: "Marketing Digital",
    nombreVacante: "Community Manager",
    descripcion: "Encargado de administrar el CEO del sitio web y las estadisticas de Google Analytics ",
    ciudad: "Medellín",
    imagen: "https://img.freepik.com/foto-gratis/empresario-analizando-informe-financiero-empresa-graficos-realidad-aumentada_34141-360.jpg?w=740",
    proposito: "Proteger la estabilidad económica de la comunidad",
    responsabilidades: ["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes"],
      conocimientos: "Estudiante de últimos semestres de contaduría pública. Nivel intermedio de excel Conocimiento basico normatividad fiscal y contable",
      horario: "Lunes a Viernes 8am - 5pm",
      tipo_de_contrato: "Indefinido",
      beneficios:["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes","Manejo de herramientas web"]
},
{
    id: 6,
    area: "Tecnología",
    nombreVacante: "Desarrollador web",
    descripcion: "Encargado de desarrollar las aplicaciones de la intranet corporativa en PHP",
    ciudad: "Medellín",
    imagen: "https://img.freepik.com/foto-gratis/ingeniero-ti-analizando-codigo_1098-21513.jpg?w=740",
    proposito: "Proteger la estabilidad económica de la comunidad",
    responsabilidades: ["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes"],
      conocimientos: "Estudiante de últimos semestres de contaduría pública. Nivel intermedio de excel Conocimiento basico normatividad fiscal y contable",
      horario: "Lunes a Viernes 8am - 5pm",
      tipo_de_contrato: "Indefinido",
      beneficios:["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes","Manejo de herramientas web"]
},
{
    id: 7,
    area: "Contabilidad",
    nombreVacante: "Practicante de contabilidad",
    descripcion: "Encargado de asistir en los registros contables PUC y los libros de mayor",
    ciudad: "Bogotá",
    imagen: "https://img.freepik.com/foto-gratis/contador-calculando-ganancias-graficas-analisis-financiero_74855-4937.jpg?t=st=1650654964~exp=1650655564~hmac=27a76086c94b56d8670d94667fbadedcd7dd8a0209c302610594c7dcf9d1ae69&w=740",
    proposito: "Proteger la estabilidad económica de la comunidad",
    responsabilidades: ["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes"],
      conocimientos: "Estudiante de últimos semestres de contaduría pública. Nivel intermedio de excel Conocimiento basico normatividad fiscal y contable",
      horario: "Lunes a Viernes 8am - 5pm",
      tipo_de_contrato: "Indefinido",
      beneficios:["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes","Manejo de herramientas web"]
},
{
  id: 8,
  area: "Operativa",
  nombreVacante: "Agente de soporte",
  descripcion: "Encargado de brindar el soporte en el chat online a los jugadores de la plataforma",
  ciudad: "Medellín",
  imagen: "https://img.freepik.com/foto-gratis/empleados-estan-sonriendo-trabajando-computadoras_85574-2756.jpg?w=740",
  proposito: "Proteger la estabilidad económica de la comunidad",
  responsabilidades: ["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes"],
      conocimientos: "Estudiante de últimos semestres de contaduría pública. Nivel intermedio de excel Conocimiento basico normatividad fiscal y contable",
      horario: "Lunes a Viernes 8am - 5pm",
      tipo_de_contrato: "Indefinido",
      beneficios:["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes","Manejo de herramientas web"]
},
{
  id: 9,
  area: "Marketing Digital",
  nombreVacante: "Community Manager",
  descripcion: "Encargado de administrar el CEO del sitio web y las estadisticas de Google Analytics ",
  ciudad: "Medellín",
  imagen: "https://img.freepik.com/foto-gratis/empresario-analizando-informe-financiero-empresa-graficos-realidad-aumentada_34141-360.jpg?w=740",
  proposito: "Proteger la estabilidad económica de la comunidad",
  responsabilidades: ["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes"],
      conocimientos: "Estudiante de últimos semestres de contaduría pública. Nivel intermedio de excel Conocimiento basico normatividad fiscal y contable",
      horario: "Lunes a Viernes 8am - 5pm",
      tipo_de_contrato: "Indefinido"
},
{
  id: 10,
  area: "Tecnología",
  nombreVacante: "Desarrollador web",
  descripcion: "Encargado de desarrollar las aplicaciones de la intranet corporativa en PHP",
  ciudad: "Medellín",
  imagen: "https://img.freepik.com/foto-gratis/ingeniero-ti-analizando-codigo_1098-21513.jpg?w=740",
  proposito: "Proteger la estabilidad económica de la comunidad",
  responsabilidades: ["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes"],
      conocimientos: "Estudiante de últimos semestres de contaduría pública. Nivel intermedio de excel Conocimiento basico normatividad fiscal y contable",
      horario: "Lunes a Viernes 8am - 5pm",
      tipo_de_contrato: "Indefinido"
},
{
  id: 11,
  area: "Contabilidad",
  nombreVacante: "Practicante de contabilidad",
  descripcion: "Encargado de asistir en los registros contables PUC y los libros de mayor",
  ciudad: "Bogotá",
  imagen: "https://img.freepik.com/foto-gratis/contador-calculando-ganancias-graficas-analisis-financiero_74855-4937.jpg?t=st=1650654964~exp=1650655564~hmac=27a76086c94b56d8670d94667fbadedcd7dd8a0209c302610594c7dcf9d1ae69&w=740",
  proposito: "Proteger la estabilidad económica de la comunidad",
  responsabilidades: ["Causación gestión y análisis de documentos","Elaboración de notas internas Elaboracion de informes"],
      conocimientos: "Estudiante de últimos semestres de contaduría pública. Nivel intermedio de excel Conocimiento basico normatividad fiscal y contable",
      horario: "Lunes a Viernes 8am - 5pm",
      tipo_de_contrato: "Indefinido"
}

  ];

  */
  
  public id:any;
  public response:any;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe( (paramMap:any) =>{
      const {params} = paramMap
      console.log(params.variable)
      this.cargarData(params.variable)
    })
    
    
  }

  cargarData(ide:number){

    this.dataService.getListado()
    .subscribe((response:any)=>{
      
      for (let i=0; i<response.length;i++){
      if (response[i].id == ide){
        this.response = response[i];
        console.log(response)
      }
    }
     
      });
     }
     





  

  

  
  
 

}
