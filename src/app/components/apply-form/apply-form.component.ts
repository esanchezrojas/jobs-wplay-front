
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataModalsService } from 'src/app/services/data-modals.service';
import Swal from 'sweetalert2';
import { DataService } from 'src/app/services/data.service';
import { RegistroExperiencia } from 'src/app/models/form-experiencia.model';



@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})


export class ApplyFormComponent implements OnInit {

  /** */
  public response: any;

  /**
   * Variables del formulario experiencia
   */
  public meses = GeneralData.MESES;
  public years = GeneralData.YEARS;
  public niveles = GeneralData.NIVELES_ACADEMICOS;
  public estados = GeneralData.ESTADOS_FORMACION;
  public ciudades = GeneralData.CIUDADES;

  
  data: any = {};
  cargo: any = '';
  selectlistaExperiencia: any = [];
  selectlistaFormacion: any = [];
  listaExperiencia: any = [];
  listaFormacion: any = [];
  array: any = {};
  swe = false;
  swf = false;
  indiceE: string = "";
  indiceF: string = "";


  formE: FormGroup = new FormGroup({});
  formF: FormGroup = new FormGroup({});


  constructor(

    private dataService: DataService,
    private serviceModal: DataModalsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap
      console.log(params.var)
      this.cargarData(params.var)
    });

    this.crearFormE();
    this.crearFormF();
  }


   /**
   * Carga el id de la oferta mediante route
   * @param ide Es el valor del id de la oferta
   */
    cargarData(ide: number) {

      this.dataService.getListado()
        .subscribe((response: any) => {
  
          for (let i = 0; i < response.length; i++) {
            if (response[i].id == ide) {
              this.response = response[i];
              console.log(response)
            }
          }
  
        });
    }

 /**
   * Se crea form group para realizar validaciones de formulario experiencia
   */
  crearFormE() {
    this.formE = this.fb.group({
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

  /**
     * Se crea form group para realizar validaciones de formulario formación
     */
crearFormF() {
    this.formF = this.fb.group({
      institucion: ["", [Validators.required]],
      programa: ["", [Validators.required]],
      nivel: ["", [Validators.required]],
      estado: ["", [Validators.required]]
 });
  }

 /**
   * Valida que swe sea verdadero para agregar un nuevo registro
   */
  enviarE() {

    if (this.swe == false) {
      console.log('sw es falso')
      //this.longitud = this.listaExperiencia.length + 1;
      this.listaExperiencia.push(this.formE.value);
      console.log(this.listaExperiencia, 'esta es la experiencia array')


    } else {

      this.listaExperiencia[this.indiceE] = this.formE.value;
    }

    this.formE.reset();

  }

  /**
   * Valida que swf sea verdadero para agregar un nuevo registro
   */
  enviarF(){
    if (this.swf == false) {
      console.log('swf es falso')
      //this.longitud = this.listaExperiencia.length + 1;
      this.listaFormacion.push(this.formF.value);
      console.log(this.listaFormacion, 'esta es la formacion array')


    } else {

      this.listaFormacion[this.indiceF] = this.formF.value;
    }

    this.formF.reset();

  }

  /*
  createFormDatosPersonales() {

    this.form = this.fb.group({


      nombre: ["", [Validators.required]],
      apellido: ["", [Validators.required]],
      celular: ["", [Validators.required]],
      cumpleanos: ["", [Validators.required]],
      cedula: ["", [Validators.required]],
      email: ["", [Validators.required]],
      ciudad: ["", [Validators.required]],
      redsocial: ["", [Validators.required]],
      hv: ["", [Validators.required]],
      pf: ["", [Validators.required]],
      lpf: ["", [Validators.required]]


    });

  }


  /**
   * Elimina el registro seleccionado en la tabla experiencia
   * @param indice Es la pocicion del array que se va a eliminar
   */
  
  /**
   * Elimina un registro de la tabla obteniendo una posición
   * @param indice Es la pocicion en el arreglo que se envia para eliminar en la tabla
   */
  eliminarExperiencia(indice: any) {

    Swal.fire({
      title: 'Desea Eliminar este registro?',
      text: "No se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Este registro se ha eliminado.',
          'success'
        )
        this.listaExperiencia.splice(indice, 1);
      }
    });
 }

 /**
   * Elimina un registro de la tabla obteniendo una posición
   * @param indice Es la pocicion en el arreglo que se envia para eliminar en la tabla
   */
 eliminarFormacion(indice: any){

  Swal.fire({
    title: 'Desea Eliminar este registro?',
    text: "No se podra revertir!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Eliminado!',
        'Este registro se ha eliminado.',
        'success'
      )
      this.listaFormacion.splice(indice, 1);
    }
  });

 }

  /**
   * Inicia la propiedad global sw en false para para indicar que se va a ingresar un registro nuevo
   */
  agregarExperiencia() {
    // this.selectlistaExperiencia = [];
    this.swe = false;
  }
 
  /**
   * Inicia la propiedad global sw en false para para indicar que se va a ingresar un registro nuevo
   */
  agregarFormacion(){
    this.swf = false;
  }


 /**
   * Agrega el registro seleccionado al arreglo para ser editado
   * @param item Es el registro seleccionado desde el html
   * @param indice Es la posicion en el arreglo
   */
  editarExperiencia(item: any, indice: any) {

    this.swe = true;
    this.formE.setValue(item);
    this.indiceE = indice;
 
}


/**
 * Agrega el registro seleccionado al arreglo para ser editado
 * @param item Es el registro seleccionado desde el html
 * @param indice Es la posicion en el arreglo
 */
editarFormacion(item: any, indice: any) {

  this.swf = true;
  this.formF.setValue(item);
  this.indiceF = indice;

}

}