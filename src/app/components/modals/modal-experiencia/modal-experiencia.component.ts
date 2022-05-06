import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroExperiencia } from '../../../models/form-experiencia.model';
import { DataModalsService } from 'src/app/services/data-modals.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {

  public meses = GeneralData.MESES;
  public years = GeneralData.YEARS;
  public niveles = GeneralData.NIVELES_ACADEMICOS;
  public estados = GeneralData.ESTADOS_FORMACION;
  public ciudades = GeneralData.CIUDADES;
  form: FormGroup = new FormGroup({});
  data: any = {};



  constructor(
    private serviceExperiencia: DataModalsService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm() {
    this.form = this.fb.group({

      empresa: ["", [Validators.required]],
      cargo: ["", [Validators.required]],
      ciudad: ["", [Validators.required]],
      funciones: ["", [Validators.required]],
      yearini: ["", [Validators.required]],
      mesini: ["", [Validators.required]],
      yearfin: ["", [Validators.required]],
      mesfin: ["", [Validators.required]]



    });
  }

  enviar(form: any) {

    this.data = form;

    this.serviceExperiencia.disparadorExperiencia.emit({ data: this.data })

    //en this.profileForm.value tenemos el valor del form para poder manipularlo a nuestro gusto. Si queremos acceder a, por ejemplo, un control especifico, podemos hacerlo con this.profileForm.controls['nombreControl']
    console.log(this.data);
    if (this.form.invalid) {
      // alert('Mensaje invalido');
    } else {
      //alert('Mensaje Valido');
      this.form.reset();

    }

  }

  

  limpiar() {
    this.form.reset();
  }

}
