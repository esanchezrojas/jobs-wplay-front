import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTippyModule } from 'ngx-tippy-wrapper';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacantesListComponent } from './components/vacantes-list/vacantes-list.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApplyFormComponent } from './components/apply-form/apply-form.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FilterCityPipe } from './pipes/filter-city.pipe';
import { Loading2Component } from './components/loading2/loading2.component';
import { LoginComponent } from './components/login/login.component';

//Providers
import { JwtHelperService, JWT_OPTIONS }  from '@auth0/angular-jwt';



@NgModule({
  declarations: [
    AppComponent,
    VacantesListComponent,
    HeaderComponent,
    FilterPipe,
    ItemDetailComponent,
    HomeComponent,
    FooterComponent,
    ApplyFormComponent,
    FilterCityPipe,
    LoaderComponent,
    Loading2Component,
    LoginComponent
    
  
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,ReactiveFormsModule,
    NgxTippyModule

  ],
  providers: [
     // JWT
     { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
     JwtHelperService,
     
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
