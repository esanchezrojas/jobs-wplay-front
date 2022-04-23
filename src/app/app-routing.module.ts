import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { HomeComponent } from './components/home/home.component';
import { VacantesListComponent } from './components/vacantes-list/vacantes-list.component';
import { FormFilterComponent } from './components/form-filter/form-filter.component';



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
  path: 'post/:variable',
  component: ItemDetailComponent
  },
  {
    path: 'prueba',
    component: FormFilterComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
