import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {RegistroExperiencia} from '../../models/form-experiencia.model'
import { DataModalsService } from 'src/app/services/data-modals.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})


export class ApplyFormComponent implements OnInit {

 

  public meses = GeneralData.MESES;
  public years = GeneralData.YEARS;
  public niveles = GeneralData.NIVELES_ACADEMICOS;
  public estados = GeneralData.ESTADOS_FORMACION;
  public ciudades = GeneralData.CIUDADES;

  form: FormGroup = new FormGroup({});
  data:any = {};
  cargo:any='';
  listaExperiencia:any=[];
  listaFormacion:any=[];

  constructor(
    private serviceModal: DataModalsService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
   // private registerService: RegisterUserService
    
    ) { }

  ngOnInit(): void {

    this.serviceModal.disparadorExperiencia
    .subscribe(data =>{
     this.listaExperiencia.push(data.data);
    //  console.log('Reciviendo data: ',this.listaExperiencia);
        } );


    this.serviceModal.disparadorFormacion
    .subscribe(data =>{
      this.listaFormacion.push(data.data);
    //  console.log('Reciviendo data: ',this.listaFormacion);
        } );
        

    /*

    this.route.paramMap.subscribe( (paramMap:any) =>{
      const {params} = paramMap
      console.log(params.variable)
      this.cargarData(params.variable)
      let registro = new RegistroExperiencia();
      this.cargo = registro.cargo
      console.log('este es el cargo'+ this.cargo)
    });
*/

    this.createForm();


  }

  cargarData(id:string){

  }

  createForm(){
    
    this.form = this.fb.group({

     
      nombre: ["",[Validators.required]],
      apellido: ["",[Validators.required]],
      celular: ["",[Validators.required]],
      cumpleanos:["",[Validators.required]],
      cedula: ["",[Validators.required]],
      email: ["",[Validators.required]],
      ciudad: ["",[Validators.required]],
      redsocial: ["",[Validators.required]],
      hv:["",[Validators.required]],
      pf: ["",[Validators.required]],
      lpf: ["",[Validators.required]]
     

    });
    
  }

  enviar(form:any){

    this.data = form;
    this.data.formacion = this.listaFormacion;
    this.data.experiencia = this.listaExperiencia;

    console.log(this.data); //en this.profileForm.value tenemos el valor del form para poder manipularlo a nuestro gusto. Si queremos acceder a, por ejemplo, un control especifico, podemos hacerlo con this.profileForm.controls['nombreControl']
    if(this.form.invalid){
      /*
      Swal.fire({
        title:'Faltan campos por llenar',
        icon: 'warning',
        showCloseButton: true
       });
*/
     

    }else{
     

      this.router.navigate(['/']);
    }

    

   
}


editar(indice:any){

//console.log(this.listaFormacion[indice])
this.serviceModal.disparadorFormacion2.emit({data:this.listaFormacion[indice]})

  console.log();
}

agregar(){
  //this.form.reset();
}

eliminar(indice:any){
  this.listaFormacion.splice(indice, 1);
}

registro(){

}




}