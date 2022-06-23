import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    nom_usuario: '',
    clave: ''
  }
  constructor(
    private authService: AuthService,
    private router: Router

  ) { }



  ngOnInit(): void {

  }


  logIn() {

    if(this.user.nom_usuario == ""){
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
    }else if(this.user.clave == ""){
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
    }else{

    console.log('click');

    this.authService.singin(this.user).subscribe({
      next: (res: any)  => {

        console.log(res.message)

        if(res.status === 200){
     
      Swal.fire({
          position: 'center',
          icon: 'success',
          title: res.message,
          showConfirmButton: false,
          timer: 2500
        });

        localStorage.setItem('token', res.token);
        this.router.navigate(['']);

      }

      if(res.status === 401){

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
      

    },
    error:(err: any) => {
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
      console.log(err,' Este fue el error')
    }
   });
  }

  }
}

  



