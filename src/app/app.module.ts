import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacantesListComponent } from './components/vacantes-list/vacantes-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FormFilterComponent } from './components/form-filter/form-filter.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';
import { ModalExperienciaComponent } from './components/modals/modal-experiencia/modal-experiencia.component';
import { ModalFormacionComponent } from './components/modals/modal-formacion/modal-formacion.component';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [
    AppComponent,
    VacantesListComponent,
    HeaderComponent,
    FormFilterComponent,
    FilterPipe,
    ItemDetailComponent,
    HomeComponent,
    FooterComponent,
    ApplyFormComponent,
    ModalExperienciaComponent,
    ModalFormacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,ReactiveFormsModule,
    TagInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
