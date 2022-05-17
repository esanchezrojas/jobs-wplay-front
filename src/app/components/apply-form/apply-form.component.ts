import { SpecialFunctions } from './../../config/special-functions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataModalsService } from 'src/app/services/data-modals.service';
import Swal from 'sweetalert2';
import { DataService } from 'src/app/services/data.service';
import { RegistroExperiencia } from 'src/app/models/form-experiencia.model';
import { RegistroVacanteService } from 'src/app/services/registro-vacante.service';
import { v4 as uuidv4 } from 'uuid';



@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})


export class ApplyFormComponent implements OnInit {

  /** */
  public response: any = [];

  /**
   * Variables del formulario experiencia
   */
  public meses = GeneralData.MESES;
  public years = GeneralData.YEARS;
  public niveles = GeneralData.NIVELES_ACADEMICOS;
  public estados = GeneralData.ESTADOS_FORMACION;
  public ciudades = GeneralData.CIUDADES;

  uuid: any;



  listaExperiencia: any = [];
  listaFormacion: any = [];
  array: any = {};
  swe: boolean = false;
  swf: boolean = false;
  indiceE: any = "";
  indiceF: any = "";


  formE: FormGroup = new FormGroup({});//formulario experiencia
  formF: FormGroup = new FormGroup({});//formulario formacion

  formato: SpecialFunctions = new SpecialFunctions();


  constructor(


    private dataService: DataService,
    private serviceModal: DataModalsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private registroE: RegistroVacanteService

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
      .subscribe((res: any) => {

        for (let i = 0; i < res.length; i++) {
          if (res[i].id == ide) {
            this.response = res[i];
            console.log(res)
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
 * Se ejecuta al presionar el boton guardar cambios
 * @param datos Es el valor de los datos enviado desde el formulario
 */
  async enviarE(datos: any) {

    let modelE = new RegistroExperiencia();

    //modelE.setvacantehvexper_id = this.response.id;
    modelE.setvacantehv_id(this.uuid);
    modelE.setcargo(datos.cargo);
    modelE.setempresa(datos.empresa);
    modelE.setdescripcion(datos.funciones);
    modelE.setanio_ini(datos.yearini);
    modelE.setanio_fin(datos.yearfin);

    modelE.setmes_ini(2);
    modelE.setmes_fin(3);

    await this.registroE.guardarE(modelE).subscribe({
      next: (data: any) => {

          this.registrarExperiencia(datos);
          alert('se ejecuto correctamente')
          console.log(JSON.stringify(data.message) + ' mensaje back')
          // alert(JSON.stringify(data));
    },
      error: (error: any) => {
        alert(error + GeneralData.ERROR_GENERAL_MESSAGE);
      }
    });



  }

  
  /**
   * Cuando swe es verdadero quiere decir que se esta editando un registro
   * Cuando swe es falso quiere decir que se esta agregando un registro nuevo
   * @param datos Es el valor de los datos enviados desde el formulario
   */
  registrarExperiencia(datos: any) {

    if (!this.swe) {
      this.listaExperiencia.push(this.formE.value);
    } else {
      this.listaExperiencia[this.indiceE] = this.formE.value;
    }

    this.formE.reset();
    // this.registrarExperiencia(datos);



  }



  /**
   * Valida que swf sea verdadero para agregar un nuevo registro
   */
  enviarF(datos: any) {
    if (!this.swf) {

      this.listaFormacion.push(this.formF.value);

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
  eliminarFormacion(indice: any) {

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

    this.swe = false;

  }

  /**
   * Inicia la propiedad global sw en false para para indicar que se va a ingresar un registro nuevo
   */
  agregarFormacion() {

    this.swf = false;

  }


  /**
    * Agrega el registro seleccionado al arreglo para ser editado
    * @param item Es el registro seleccionado desde el html
    * @param indice Es la posicion en el arreglo
    */
  async editarExperiencia(item: any, indice: any) {

    let modelE = new RegistroExperiencia();

    //modelE.setvacantehvexper_id = this.response.id;
    modelE.setvacantehv_id(this.response.id);
    modelE.setcargo(item.cargo);
    modelE.setempresa(item.empresa);
    modelE.setdescripcion(item.funciones);
    modelE.setanio_ini(item.yearini);
    modelE.setanio_fin(item.yearfin);

    modelE.setmes_ini(2);
    modelE.setmes_fin(3);

    
    this.swe = true;
    this.formE.setValue(item);
    this.indiceE = indice;

    await this.registroE.editarE(item).subscribe({
      next: (data: any) => {

          this.registrarExperiencia(item);
          alert('se ejecuto correctamente')
          console.log(JSON.stringify(data.message) + 'mensaje back')
          // alert(JSON.stringify(data));
    },
      error: (error: any) => {
        alert(error + GeneralData.ERROR_GENERAL_MESSAGE);
      }
    });

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