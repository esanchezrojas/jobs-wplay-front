import { Component, OnInit } from '@angular/core';
import { EmitterService } from 'src/app/services/emitter.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormApplyService } from 'src/app/services/form-apply.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged:boolean = false;
  nombre:string ='';
  apellido:string ='';
  dataIni:any;
  

  constructor(
   private serviceEmitter: EmitterService,
   private authService: AuthService,
   private router: Router,
   private serviceForm: FormApplyService
  ) { }

  ngOnInit(): void {

    this.datosRegistro();
  
  }


  datosRegistro(){
    const numUnico = localStorage.getItem('cod_unico_registro');
    
    if(numUnico == " " || numUnico == null || numUnico == undefined){
    

  }else{

    this.serviceForm.list(numUnico)
    .subscribe({
      next:
        (res: any) => {

        console.log('ingreso en el header')
          this.nombre = res.datos.nombres;
          this.apellido = res.datos.apellidos;
          this.isLogged = true;
          
         
          


          },
      error: (err) => {
        console.log(err)
        
      }
    });

  }


  }
  
  salir(){
    localStorage.removeItem('token');
    localStorage.removeItem('cod_unico_registro');
    this.router.navigate(['']);
    location.reload();
    //this.loggedIn.next(false);
  }


  deshabilitar(){


    Swal.fire({
      title: 'Desea deshabilitar su cuenta?',
      text: "No se podran revertir los cambios!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, deshabilitar!'
    }).then((result) => {
      if (result.isConfirmed) {


        const numUnico = localStorage.getItem('cod_unico_registro');

        


        if(numUnico == " " || numUnico == null || numUnico == undefined){

         
      
        }else{


          const datoss = {

            cod_unico_registro:numUnico,
            estado: 'I'
  
          }

          this.serviceForm.disabled(datoss)
          .subscribe({
            next:
              (res: any) => {
      
               
              
                Swal.fire({
                  
                  title:res.message,
                  icon:'success'
              })
    
    
                this.isLogged = false;
                localStorage.removeItem('token');
                localStorage.removeItem('cod_unico_registro');
                this.router.navigate(['']);
              
      
                },
            error: (err) => {
              console.log(err)
              
            }
          });


        }


      
      }
    })

   





   

  }

  

}
