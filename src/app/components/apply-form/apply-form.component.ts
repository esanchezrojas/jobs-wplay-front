import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {RegistroExperiencia} from '../../models/form-experiencia.model'
import { DataModalsService } from 'src/app/services/data-modals.service';

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

  constructor(
    private serviceExperiencia: DataModalsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
   // private registerService: RegisterUserService
    
    ) { }

  ngOnInit(): void {

    this.serviceExperiencia.disparadorExperiencia
    .subscribe(data =>{
     
      this.listaExperiencia.push(data.data);
      console.log('Reciviendo data: ',this.listaExperiencia);
      
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

      //Items Paso 1/4
      nombre: ["",[Validators.required]],
      apellido: ["",[Validators.required]],
      celular: ["",[Validators.required]],
      cumpleanos:["",[Validators.required]],
      cedula: ["",[Validators.required]],
      email: ["",[Validators.required]],
      ciudad: ["",[Validators.required]],
      redsocial: ["",[Validators.required]]
     

    });
    
  }

  enviar(form:any){

    this.data = form;

    console.log(this.data); //en this.profileForm.value tenemos el valor del form para poder manipularlo a nuestro gusto. Si queremos acceder a, por ejemplo, un control especifico, podemos hacerlo con this.profileForm.controls['nombreControl']
    if(this.form.invalid){
      alert('Mensaje invalido');
    }else{
      alert('Mensaje Valido');
    }

   
}

registro(){

}




}