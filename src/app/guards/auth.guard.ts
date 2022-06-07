import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
    alert('Expiro tu sesion')
    this.router.navigate(['login']);
    return false;
  }
  return true;
}

  
}
