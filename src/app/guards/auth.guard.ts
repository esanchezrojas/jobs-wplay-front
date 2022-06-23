import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

constructor(
  private authService: AuthService,
  private router: Router
){}


canActivate():boolean{

  if(!this.authService.isAuth()){
    //console.log('Token no es válido o ya expiró');
    Swal.fire({
      title: 'Para aplicar debe registrarse o iniciar sesión',
      showDenyButton: true,
      showCancelButton: true,
      denyButtonColor: '#0DCAF0',
      confirmButtonColor: '#198754',
      confirmButtonText: 'Iniciar Sesión',
      denyButtonText: `Registrarme`,
      cancelButtonText:'Cancelar'
      
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['login']);
      } else if (result.isDenied) {
        this.router.navigate(['registro']);
      }
    })
    
    return false;
  }
  return true;
}

  
}
