import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroVacanteService } from 'src/app/services/registro-vacante.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  formForgot: FormGroup = new FormGroup({});//formulario de registro

  constructor(
    private serviceRegistro: RegistroVacanteService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.crearFormF();
  }

  crearFormF(){

    this.formForgot = this.fb.group({

      email: ["", [Validators.required, Validators.maxLength(150)]],

  });
}

submit(datos: any){


  this.serviceRegistro.forgot(datos)
    .subscribe({
      next: (res: any) => {

 //alert(res.message);
  if (res.status === 200) {
        Swal.fire({
          title:res.message,
          icon: 'success',
          confirmButtonText: 'Volver al inicio',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            this.router.navigate(['/inicio']);
          }
        })
      }else if (res.status === 401){
        Swal.fire({
          title:res.message,
          icon: 'error',
          confirmButtonText: 'Volver al inicio',
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
          
          }
        });


      }

        


      },
      error: (err: any) => {
        console.log(err)
      }


    });
  //End Suscribe

}



}
