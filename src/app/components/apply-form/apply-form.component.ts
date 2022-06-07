
import { SpecialFunctions } from './../../config/special-functions';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DataService } from 'src/app/services/data.service';
import { UploadService } from 'src/app/services/upload.service';
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
  response: any = [];

  /**
   * Variables del formulario experiencia
   */
  meses = GeneralData.MESES;
  years = GeneralData.YEARS;

  //public niveles = GeneralData.NIVELES_ACADEMICOS;
  estados = GeneralData.ESTADOS_FORMACION;
  ciudades = GeneralData.CIUDADES;

  uuid: any;
  myimage: Observable<any> | undefined;
  loading: boolean= false;


  city: any;
  niveles: any;
  listaExperiencia: any = [];
  listaExperienciaBD: any = [];
  listaFormacion: any = [];
  listaFormacionBD: any = [];
  files: any;
  archivos: any = [];
  array: any = {};
  swe: boolean = false;
  swf: boolean = false;
  indiceE: any = "";
  indiceF: any = "";


  formE: FormGroup = new FormGroup({});//formulario experiencia
  formF: FormGroup = new FormGroup({});//formulario formacion
  formT: FormGroup = new FormGroup({});//formulario datos basicos

  formato: SpecialFunctions = new SpecialFunctions();


  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private dataService: DataService,
    private serviceRegistro: RegistroVacanteService,
    private serviceUpload: UploadService


  ) { }

  ngOnInit(): void {

    this.servicesIni();
    this.crearFormE();
    this.crearFormF();
    this.createFormT();
  }

  /**
   * Trae los datos que se necesitan al cargar la página
   */
  servicesIni() {


    this.dataService.getListas()
      .subscribe((res: any) => {

        this.city = res.ciudad;
        this.niveles = res.nivel;
       
      });

    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap
      console.log(params.var)
      this.cargarData(params.var)
    });

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
            
          }
        }

      });
  }



  /**
   * Se crea form group para realizar validaciones de formulario de datos basicos de usuario
   */
  createFormT() {

    this.formT = this.fb.group({
      nombre: ["", [Validators.required, Validators.maxLength(150)]],
      apellido: ["", [Validators.required, Validators.maxLength(150)]],
      celular: ["", [Validators.required, Validators.maxLength(10), Validators.minLength(10),Validators.pattern(/^[0-9]+$/)]],
      cumpleanios: ["", [Validators.required]],
      cedula: ["", [Validators.required, Validators.maxLength(11), Validators.minLength(6),Validators.pattern(/^[0-9]+$/)]],
      email: ["", [Validators.required, Validators.email, Validators.maxLength(150)]],
      ciudad: ["", [Validators.required]],
      redsocial: [""],
      hv: ["",[Validators.required]],
      pf: [""],
      lpf: [""],
      autorizacion: [true]
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
      anio_fin: [""],
      mes_fin: [""],
      vacantehv_id: [""],
      actualmente: [""]



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
      estado_id: ["", [Validators.required]],
      vacantehv_id: [""],
    });
  }


   enviarTodo(datos: any) {

    //this.router.navigate(['/inicio']);

    let uuid = uuidv4();
    let modelDatosB = new DatosBasicos();
    modelDatosB.num_unico_hv = uuid;
    modelDatosB.nombres = datos.nombre;
    modelDatosB.apellidos = datos.apellido;
    modelDatosB.cedula = datos.cedula;
    modelDatosB.celular = datos.celular;
    modelDatosB.ciudad_id = datos.ciudad;
    modelDatosB.email = datos.email;
    modelDatosB.fecha_cumple = datos.cumpleanios;
    modelDatosB.link_redsoc_fav = datos.redsocial;

    let registro = new RegistroVanteModel();

    if (this.listaExperiencia.length > 0 && this.listaFormacion.length > 0) {

       //if (this.formT.valid) {
      if (true) {
        console.log('Es valido');
        

        var formData = new FormData();
    /*
    this.archivos.array.forEach((archivo: any) => {
      formData.append('files', archivo)
      console.log(archivo)
    });
    */
    
    formData.append('files', this.files)

    
        registro.registroIni = modelDatosB;
        registro.formacion = this.listaFormacion;
        registro.experiencia = this.listaExperiencia;
        registro.archivo = formData;

        console.log('iniciales ', registro.registroIni)
        console.log('formacion ', registro.formacion)
        console.log('experiencia ', registro.experiencia)


      try{
        //Estado de spinner
        this.loading = true;
        this.serviceRegistro.guardarT(registro)
          .subscribe((res: any) => {

            //alert(res.message);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: res.message,
              showConfirmButton: false,
              timer: 2500
            })
            // this.router.navigate(['/inicio']);
            this.loading = false;
          });

        }catch(error){
          console.log('Error ',error)
          this.loading = false;
        }


        this.subirArchivo();
      

      } else {
        Swal.fire({
          icon: 'info',
          title: 'Se deben validar los campos obligatorios',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }

    } else {
    
      Swal.fire({
        icon: 'info',
        title: 'Se debe agregar al menos una formación y al menos una experiencia',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    }


    console.log(this.formT);
  }


  /**
   * Se ejecuta al presionar el boton guardar cambios
   * @param datos Es el valor de los datos enviado desde el formulario
   */
  enviarE(datos: any) {


    let modelE = new ModeloExperiencia();

    if (datos.actualmente === 'S') {
      modelE.anio_fin = '';
      modelE.mes_fin = '';
      console.log('ingresó al check')

    } else {
      modelE.anio_fin = datos.anio_fin;
      modelE.mes_fin = datos.mes_fin;
      console.log('No ingresó al check')
    }

    modelE.vacantehv_id = this.response.id;
    modelE.empresa = datos.empresa;
    modelE.cargo = datos.cargo;
    modelE.ciudad_id = datos.ciudad_id;
    modelE.descripcion = datos.descripcion;
    modelE.anio_ini = datos.anio_ini;
    modelE.mes_ini = datos.mes_ini;
    modelE.actualmente = datos.actualmente;

    console.log(modelE.actualmente, 'actualmente')



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

    modelF.vacantehv_id = this.response.id;
    modelF.nombre_institucion = datos.nombre_institucion;
    modelF.programa_academico = datos.programa_academico;
    modelF.nivel_id = datos.nivel_id;
    modelF.estado_id = datos.estado_id;


    if (!this.swf) {

      this.listaFormacion.push(modelF);
      console.log('nuevo ', modelF)

    } else {

      this.listaFormacion[this.indiceF] = modelF;
      console.log('editado ', modelF)
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

    this.formE.reset();
    this.swe = false;

  }

  /**
   * Inicia la propiedad global sw en false para para indicar que se va a ingresar un registro nuevo
   */
  agregarFormacion() {

    this.formF.reset();
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


  capturarFile(event: Event) {

    
    let file:any;
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;

    
    if (fileList) {
      file = fileList[0];
     this.files = this.validacionUpload(file)
      console.log("FileUpload -> file", file);
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

    var formData = new FormData();
    /*
    this.archivos.array.forEach((archivo: any) => {
      formData.append('files', archivo)
      console.log(archivo)
    });
    */
   try{
    formData.append('files', this.files)
console.log(this.files)
 this.loading = true;
    this.serviceUpload.upload(formData)
          .subscribe((res: any) => {

           //alert('mensaje'+res.message)
           Swal.fire({
            position: 'center',
            icon: 'success',
            title: res.message,
            showConfirmButton: false,
            timer: 2500
          })
           this.loading = false;
          });
        }catch(error){
          console.log(error)
          this.loading = false;
        }
     
  }



  validacionUpload(file:File){

    let sizeByte: number = 0;
    let siezekiloByte: number = 0;
    let maxSize = 2048;// Establecer peso máximo (2048 kbytes / 2mb)
   
    //Tamaño actual
    sizeByte = file.size;
    //Tamaño para convertido a mb para comparar
    siezekiloByte = sizeByte / 1024;
    //Tipo de archivo
    let archivoType = file.type;
    //Array de datos permitidos
    var match = ["application/pdf"];

    console.log(sizeByte, ' este es el tamaño')
    console.log(siezekiloByte, ' este es el tamaño en kb')
    console.log(archivoType, ' este es el tipo de extencion')
    //funcion para convertir en base64
    //this.convertToBase64(file);
    
    //Validación Tipo de archivo
    if (!match.includes(archivoType)) {
      //alert("Solo se admite formato pdf");
      Swal.fire({
        icon: 'info',
        title: 'Solo se admite formato pdf',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      // Se usa this para restablecer el campo que disparó el evento
      this.formT.get('hv')?.setValue(null)
    }

    //Validación tamaño maxímo
    if (siezekiloByte > maxSize) {
      console.log(sizeByte, ' este es el tamaño')
     // alert('El tamaño permitido es 2mb su archivo pesa ' + sizeByte + 'mb');
      Swal.fire({
        icon: 'info',
        title: 'El tamaño maxímo permitido es 2mb',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      this.formT.get('hv')?.setValue(null)
    }

    return file;

   

  }




}