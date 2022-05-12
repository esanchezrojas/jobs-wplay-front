import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { HomeComponent } from './components/home/home.component';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';



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
    component: ApplyFormComponent

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
