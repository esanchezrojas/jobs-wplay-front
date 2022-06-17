import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from '../../services/data.service';
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
 ciudades = GeneralData.CIUDADES_LIST;
  

  
  filterPost = '';
  filterC = '';
  
  
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
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
    .subscribe({
      next: (res:any) => {
      let cont = res.length;
      this.totalVacantes = res.length;
      this.vacantes = res;
      console.log(res)
      console.log(cont)
    

    },
    error: (err:any) =>{
     //if(err.status === 0){
      // this.router.navigate(['/loader'])
       //alert('error de conexión con el servidor')
     //}
    // alert(err)
     Swal.fire({
      title: err,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
      
    }
    });

    }
  
    

    

     }

    
     