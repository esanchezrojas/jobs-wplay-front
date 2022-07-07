import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmitterService } from 'src/app/services/emitter.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  show: boolean = false;
  icon: string = '<i class="fa-solid fa-eye"></i>'
  user = {
    email: '',
    clave: ''
  }
  isLogin: boolean = false;


  constructor(
    private authService: AuthService,
    private router: Router,
    private serviceEmitter: EmitterService

  ) { }

  ngOnInit(): void {

  }

  logIn() {

    if (this.user.email == "") {
      Swal.fire({
        icon: 'info',
        title: 'Usuario vacio',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    } else if (this.user.clave == "") {
      Swal.fire({
        icon: 'info',
        title: 'Contraseña vacia',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    } else {

      this.authService.singin(this.user).subscribe({
        next: (res: any) => {


          if (res.status === 200) {

            const { nombres, apellidos, cod_unico_registro } = res.registro;

            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `Bienvenido ${nombres} ${apellidos}`,
              showConfirmButton: false,
              timer: 2500
            });




            localStorage.setItem('token', res.token);
            localStorage.setItem('cod_unico_registro', cod_unico_registro);
            // this.serviceEmitter.disparadorLogin.emit({ data: res.registro })
            this.user.clave = "";
            this.user.email = "";
            this.router.navigate(['']);

          }

          if(res.status == 203){

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

            this.user.clave = "";
            this.user.email = "";
            
          }

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

            this.user.clave = "";
            this.user.email = "";

          }


        },
        error: (err: any) => {
          Swal.fire({
            icon: 'info',
            title: err,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });

          this.user.clave = "";
          this.user.email = "";

        }
      });
    }

  }

  password() {

    this.show = !this.show;

  }

}
