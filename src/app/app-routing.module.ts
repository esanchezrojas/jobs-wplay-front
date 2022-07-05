import { AuthGuard } from './guards/auth.guard';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { HomeComponent } from './components/home/home.component';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';
import { LoaderComponent } from './components/loader/loader.component';
import { Loading2Component } from './components/loading2/loading2.component';
import { LoginComponent } from './components/login/login.component';


import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';




const routes: Routes = [
 /*
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio',
    component: HomeComponent
  },
  */
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'inicio',
    component: HomeComponent

  },
  {
  path: 'oferta/:variable',
  component: ItemDetailComponent
  
  },
  
  {
    path: 'aplicar/:var',
    component: ApplyFormComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'loader',
    component: LoaderComponent

  },
 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: SignupComponent
  },
  {
    path: 'recuperar-contraseña',
    component: ForgotPasswordComponent
  },
  
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
