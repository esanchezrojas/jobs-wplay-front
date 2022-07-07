import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { GeneralData } from 'src/app/config/general-data';
import Swal from 'sweetalert2';

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
  //ciudades = GeneralData.CIUDADES_LIST;
  ciudades:any;
  



  filterPost = '';
  filterC = '';

  opcionSeleccionado: string  = '';
  temp: any[] = []


  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    this.getVacantes();
    this.servicesIni();
   
  }


  servicesIni() {


    this.dataService.getListas()
      .subscribe((res: any) => {

        this.ciudades = res.city;
        console.log(res)
        


      });
    }



  datos(categoria: any) {
    this.filterC = categoria;
   
  }

  getVacantes() {

    this.dataService.getListado()
      .subscribe({
        next: (res: any) => {
          let cont = res.length;
          this.totalVacantes = res.length;
          this.vacantes = res;
          this.temp = res;
         
        },
        error: (err: any) => {

          Swal.fire({
            title: err,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });

        }
        
      });

  }

  filtrarArea(){
    
    this.vacantes = this.temp
    console.log('click boton')
    let citys:any = []
    //let ciudad = 'Medellín';
    console.log(this.opcionSeleccionado)
    this.vacantes.forEach((vacante) =>{

     if( vacante.ciudad == this.opcionSeleccionado ){
      citys.push(vacante)
      console.log(citys,'este es el filtro')
     } 

    });

    this.temp = this.vacantes;

    this.vacantes = citys;

  }


  borrarFiltros(){

    location.reload();

  }


}


