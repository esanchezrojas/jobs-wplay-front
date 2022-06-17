import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    nom_usuario: '',
    clave: '',
    correo: ''
  }
  constructor(
    private router: Router,
    private signupService: SignupService
  ) { }

  ngOnInit(): void {
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





}
