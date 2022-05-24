
import { SpecialFunctions } from './../../config/special-functions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DataService } from 'src/app/services/data.service';
import { RegistroVacanteService } from 'src/app/services/registro-vacante.service';
import { v4 as uuidv4 } from 'uuid';
import { DatosBasicos } from 'src/app/models/form.databasic.model';
import { ModeloExperiencia } from 'src/app/models/form-experiencia.model';
import { ModeloFormacion } from 'src/app/models/form-formacion.model';
import { RegistroVanteModel } from 'src/app/models/registro-vacante.model';
import { Observable, Subscriber } from 'rxjs';




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
  myimage: Observable<any> | undefined;
  loading: boolean | undefined;



  listaExperiencia: any = [];
  listaFormacion: any = [];
  array: any = {};
  swe: boolean = false;
  swf: boolean = false;
  indiceE: any = "";
  indiceF: any = "";


  formE: FormGroup = new FormGroup({});//formulario experiencia
  formF: FormGroup = new FormGroup({});//formulario formacion
  formT: FormGroup = new FormGroup({});//formulario todo

  formato: SpecialFunctions = new SpecialFunctions();


  constructor(


    private dataService: DataService,

    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private registroT: RegistroVacanteService


  ) { }

  ngOnInit(): void {



    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap
      console.log(params.var)
      this.cargarData(params.var)
    });

    this.crearFormE();
    this.crearFormF();
    this.createFormT();
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




  createFormT() {

    this.formT = this.fb.group({


      nombre: ["", [Validators.required, Validators.maxLength(150)]],
      apellido: ["", [Validators.required, Validators.maxLength(150)]],
      celular: ["", [Validators.required, Validators.maxLength(10)]],
      cumpleanios: ["", [Validators.required]],
      cedula: ["", [Validators.required, Validators.maxLength(11), Validators.minLength(6)]],
      email: ["", [Validators.required, Validators.email, Validators.maxLength(150)]],
      ciudad: ["", [Validators.required]],
      redsocial: ["", [Validators.required]],
      hv: [""],
      pf: [""],
      lpf: ["", [Validators.required]],
      autorizacion: [true, [Validators.required, Validators.requiredTrue]]



    });

  }





  /**
    * Se crea form group para realizar validaciones de formulario experiencia
    */
  crearFormE() {
    this.formE = this.fb.group({
      empresa: ["", [Validators.required]],
      cargo: ["", [Validators.required]],
      ciudad_id: ["", [Validators.required]],
      descripcion: ["", [Validators.required]],
      anio_ini: ["", [Validators.required]],
      mes_ini: ["", [Validators.required]],
      anio_fin: ["", [Validators.required]],
      mes_fin: ["", [Validators.required]],
      vacantehv_id: [""]



    });
  }

  /**
     * Se crea form group para realizar validaciones de formulario formación
     */
  crearFormF() {
    this.formF = this.fb.group({
      nombre_institucion: ["", [Validators.required]],
      programa_academico: ["", [Validators.required]],
      nivel_id: ["", [Validators.required]],
      estado_id: ["", [Validators.required]]
    });
  }


  enviarTodo(datos: any) {

    let uuid = uuidv4();
    let modelDatosB = new DatosBasicos();
    modelDatosB.num_unico_hv = uuid;
    modelDatosB.nombres = datos.nombre;
    modelDatosB.apellidos = datos.apellido;
    modelDatosB.cedula = datos.cedula;
    modelDatosB.celular = datos.celular;
    modelDatosB.email = datos.email;
    modelDatosB.fecha_cumple = datos.cumpleanios;
    modelDatosB.link_redsoc_fav = datos.redsocial;



    let registro = new RegistroVanteModel();

    if (this.listaExperiencia.length > 0 && this.listaFormacion.length > 0) {

      registro.registroIni = modelDatosB;
      registro.formacion = this.listaFormacion;
      registro.experiencia = this.listaExperiencia;

      console.log('iniciales ', registro.registroIni)
      console.log('formacion ', registro.formacion)
      console.log('experiencia ', registro.experiencia)



      this.registroT.guardarT(registro)
        .subscribe((res: any) => {

          alert(res.message);
        });

    } else {
      alert('debes agregar al menos una formacion y al menos una experiencia')
    }


    console.log(this.formT);
  }

  /**
   * Se ejecuta al presionar el boton guardar cambios
   * @param datos Es el valor de los datos enviado desde el formulario
   */
  enviarE(datos: any) {

    let modelE = new ModeloExperiencia();
    let uuid = uuidv4();

    modelE.vacantehv_id = uuid;
    modelE.empresa = datos.empresa;
    modelE.cargo = datos.cargo;
    modelE.ciudad_id = datos.ciudad_id;
    modelE.descripcion = datos.descripcion;
    modelE.anio_ini = datos.anio_ini;
    modelE.anio_fin = datos.anio_fin;
    modelE.mes_ini = datos.mes_ini;
    modelE.mes_fin = datos.mes_fin;


    if (!this.swe) {
      this.listaExperiencia.push(modelE);
      console.log('nuevo ', modelE)
    } else {
      this.listaExperiencia[this.indiceE] = modelE;
      console.log('editado ', modelE)
    }

    this.formE.reset();


  }



  /**
   * Valida que swf sea verdadero para agregar un nuevo registro
   */
  enviarF(datos: any) {

    let modelF = new ModeloFormacion();
    let uuid = uuidv4();

    modelF.vacantehv_id = uuid;
    modelF.nombre_institucion = datos.nombre_institucion;
    modelF.programa_academico = datos.programa_academico;
    modelF.nivel_id = datos.nivel_id;
    modelF.estado_id = datos.estado_id;


    if (!this.swf) {

      this.listaFormacion.push(modelF);

    } else {

      this.listaFormacion[this.indiceF] = modelF;
    }

    this.formF.reset();



  }





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


  capturarFile(event: any) {

    let sizeByte: number = 0;
    let siezekiloByte: number = 0;

    const file = event.target.files[0];

    sizeByte = file.size;
    siezekiloByte = sizeByte / 1024;

    let imageType = file.type;

    var match = ["application/pdf"];
    
    console.log(sizeByte, ' este es el tamaño')
    console.log(siezekiloByte, ' este es el tamaño en kb')
    console.log(imageType, ' este es el tipo de extencion')
    //this.convertToBase64(file);
    var maxSize = 2048;// Establecer peso máximo (2048 kbytes / 2mb)

    if (!match.includes(imageType)) {
      alert("Solo se admite formato pdf");
      // Se usa this para restablecer el campo que disparó el evento
      
     
    
    }

    if (siezekiloByte > maxSize) {
      console.log(sizeByte, ' este es el tamaño')
      alert('El tamaño permitido es 2mb su archivo pesa '+ sizeByte+'mb');
      file.setValue= "";
      }
   



  }


  convertToBase64(file: File) {
    this.myimage = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    console.log(this.myimage, ' Esta es la img')
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }



  subirArchivo() {

  }




}