import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SignupService } from 'src/app/services/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroUserExternoModel } from 'src/app/models/registro-user-externo.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  isCorrect :boolean = false;
  datos:any;

  formRegister: FormGroup = new FormGroup({});//formulario de registro
  formPass: FormGroup = new FormGroup({});//formulario de registro

  constructor(
    private router: Router,
    private signupService: SignupService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createFormValidate();
    this.createFormChangePass();
  }

  createFormValidate() {

    this.formRegister = this.fb.group({
     

      email: ["", [Validators.required, Validators.email, Validators.maxLength(150)]],

      clave_recuperacion: ["", [Validators.required, Validators.minLength(10)]],

       }

    );
  }

  createFormChangePass(){

    this.formPass = this.fb.group({

      clave: ["", [Validators.required, Validators.minLength(10), Validators.pattern(/\d/), Validators.pattern(/[A-Z]/), Validators.pattern(/\W/)]],

      confirmClave: ["", [Validators.required, Validators.minLength(10), Validators.pattern(/\d/), Validators.pattern(/[A-Z]/), Validators.pattern(/\W/)]]

    },
    {
      validators: this.mustMatch('clave', 'confirmClave')
    });
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true })
      } else {
        matchingControl.setErrors(null);
      }
    }

  }

  

 


  submit(datos: any) {

    let modelregistro = new RegistroUserExternoModel();
    

    modelregistro.email = datos.email;
   // this.correo = datos.email;
    modelregistro.clave_recuperacion = datos.clave_recuperacion;
    
    
    try {
      this.signupService.validar(modelregistro).subscribe((res: any) => {
        if (res.status === 401) {

          Swal.fire({
            icon: 'info',
            title: res.message,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });

        }
        if (res.status === 200) {

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: res.message,
            showConfirmButton: false,
            timer: 2500
          });

         //localStorage.setItem('token', res.token);
         //this.formRegister.reset();
        this.datos= res.datos;
         this.isCorrect = true;

          
         
        }
      });

    } catch (err) {
      console.log(err)
      alert(err);

    }


  }


  guardar(datos: any){

    let modelregistro = new RegistroUserExternoModel();
    

    modelregistro.clave = datos.clave;
    modelregistro.cod_unico_registro = this.datos.cod_unico_registro;
    modelregistro.clave_recuperacion = " ";

    try {
      this.signupService.actualizarPass(modelregistro,this.datos.cod_unico_registro).subscribe((res: any) => {
        if (res.status === 401) {

          Swal.fire({
            icon: 'info',
            title: res.message,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });

        }
        if (res.status === 200) {

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: res.message,
            showConfirmButton: false,
            timer: 2500
          });

         //localStorage.setItem('token', res.token);
         //this.formRegister.reset();
         this.isCorrect = true;
         this.formPass
         this.formRegister.reset();
         this.router.navigate(['login']);
        

          
         
        }
      });

    } catch (err) {
      console.log(err)
      alert(err);

    }


  }

}
