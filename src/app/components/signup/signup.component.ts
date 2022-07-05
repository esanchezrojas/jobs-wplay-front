import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SignupService } from 'src/app/services/signup.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroUserExternoModel } from 'src/app/models/registro-user-externo.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    nom_usuario: '',
    clave: '',
    email: ''
  }

  formRegister: FormGroup = new FormGroup({});//formulario de registro

  constructor(
    private router: Router,
    private signupService: SignupService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {

    this.formRegister = this.fb.group({
      nombres: ["", [Validators.required]],
      apellidos: ["", [Validators.required]],

      email: ["", [Validators.required, Validators.email, Validators.maxLength(150)]],

      clave: ["", [Validators.required, Validators.minLength(10), Validators.pattern(/\d/), Validators.pattern(/[A-Z]/), Validators.pattern(/\W/)]],

      confirmClave: ["", [Validators.required, Validators.minLength(10), Validators.pattern(/\d/), Validators.pattern(/[A-Z]/), Validators.pattern(/\W/)]],
      
      autorizacion: ['checked']

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

  registro() {

    console.log(this.user, 'Este es el user')
    try {
      this.signupService.registro(this.user).subscribe((res: any) => {
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

          localStorage.setItem('token', res.token);
          this.router.navigate(['login']);
        }
      });

    } catch (err) {
      console.log(err)
      alert(err);

    }
  }

  submit(datos: any) {

    let modelregistro = new RegistroUserExternoModel();
    let uuid = uuidv4();

    modelregistro.cod_unico_registro = uuidv4();
    modelregistro.nombres = datos.nombres;
    modelregistro.apellidos = datos.apellidos;
    modelregistro.email = datos.email;
    modelregistro.clave = datos.clave;

    console.log(this.user, 'Este es el user')
    try {
      this.signupService.registro(modelregistro).subscribe((res: any) => {
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
          this.router.navigate(['login']);
        }
      });

    } catch (err) {
      console.log(err)
      alert(err);

    }


  }


}
