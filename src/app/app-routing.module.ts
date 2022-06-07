import { AuthGuard } from './guards/auth.guard';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { HomeComponent } from './components/home/home.component';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';
import { LoaderComponent } from './components/loader/loader.component';
import { Loading2Component } from './components/loading2/loading2.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateComponent } from './components/private/private.component';



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
  component: ItemDetailComponent,
  canActivate: [AuthGuard]
  },
  
  {
    path: 'aplicar/:var',
    component: ApplyFormComponent

  },
  {
    path: 'loader',
    component: LoaderComponent

  },
  {
    path: 'loader2',
    component: Loading2Component

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [AuthGuard]
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
