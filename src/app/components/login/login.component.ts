import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    userName: 'Edwin',
    pass: '1234'
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logIn(){
   // console.log(this.user);
    try{
    this.authService.singin(this.user).subscribe( (res:any) => {
      
      if(res.status === 401){
        alert(res.message + 'status 401');
        
        //localStorage.removeItem('token');
       //this.router.navigate(['private']);
      }
      if(res.status === 200){
        alert(res.message + 'status 200');
        alert(res.token + 'Este es el token');
         alert('es valido');
       localStorage.setItem('token',res.token);
       this.router.navigate(['private']);
      }
     
       
    
      
    })
  }catch(err){
    console.log(err)
    alert(err);
    
  }

  }

}
