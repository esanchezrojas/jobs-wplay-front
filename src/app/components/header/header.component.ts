import { Component, OnInit } from '@angular/core';
import { EmitterService } from 'src/app/services/emitter.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormApplyService } from 'src/app/services/form-apply.service';

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
  
/*
    this.serviceEmitter.disparadorLogin
    .subscribe((data:any) => {

      if(!this.authService.isAuth()){
        console.log('no auth')
      
      }else{
        console.log('yes auth')
        this.nombre = data.data;
        console.log('Se a logueado correctamente' ,data.data)
        
        this.isLogged = true;
        console.log(this.isLogged)
       
      }

  } );
  */


  }


  datosRegistro(){
    const numUnico = localStorage.getItem('cod_unico_registro');
    console.log(numUnico)
    
    this.serviceForm.list(numUnico)
    .subscribe({
      next:
        (res: any) => {

        
          this.nombre = res.datos.nombres;
          this.apellido = res.datos.apellidos;
          this.isLogged = true;
          
         
          


          },
      error: (err) => {
        console.log(err)
        
      }
    });
  }

  salir(){
    localStorage.removeItem('token');
    localStorage.removeItem('cod_unico_registro');
    this.router.navigate(['']);
    location.reload();
    //this.loggedIn.next(false);
  }

  

}
