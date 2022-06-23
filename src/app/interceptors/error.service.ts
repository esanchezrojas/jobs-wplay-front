import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError  } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class ErrorService implements HttpInterceptor{
  [x: string]: any;

  constructor(
    private router: Router,
  ) { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
  /*
  const headers = new HttpHeaders({
    'token-usuario': 'afhgjhjhh'
  });

  const reqClone = req.clone({
    headers
  });
  */


 console.log('Paso por el interceptor')
  //return next.handle(req)
 
  return next.handle(req).pipe(
    catchError(this.manejarError)
  )
}


manejarError(error:HttpErrorResponse){
  if(error.status == 500){
    return throwError(()=>new Error(error.statusText))
  }

  if(error.status === 0){
   // this.router.navigate(['/loader']);
    return throwError(()=>new Error('Conexión con el servidor'))
   
  }

  if(error.status === 400){
    return throwError(()=>new Error('Envio de datos'))
  }

  if(error.status === 404){
    return throwError(()=>new Error('Envio de peticion post'))
  }

  if(error.status === 500){
    return throwError(()=>new Error('Erro interno del servidor'))
  }
  

  return throwError(() => new Error(error.statusText))

}


}


