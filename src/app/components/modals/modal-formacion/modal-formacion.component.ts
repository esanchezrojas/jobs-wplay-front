import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general-data';
import { DataModalsService } from 'src/app/services/data-modals.service';



@Component({
  selector: 'app-modal-formacion',
  templateUrl: './modal-formacion.component.html',
  styleUrls: ['./modal-formacion.component.css']
})
export class ModalFormacionComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  form2: FormGroup = new FormGroup({});
  private data: any = {};
  listaFormacion: any = [];
  listaFormacion2: any = [];
  //sw = true;
  index = 0;
  sw:boolean = false;

  public estados = GeneralData.ESTADOS_FORMACION;
  public niveles = GeneralData.NIVELES_ACADEMICOS;
  constructor(
    private serviceModal: DataModalsService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.serviceModal.disparadorFormacion2
  .subscribe(data => {
    this.listaFormacion = data.data.lista;
    this.index = data.data.index;
    this.sw = data.data.sw;
    console.log('Reciviendo data formacion para editar: ', data.data.lista,' - ',data.data.index);
    //this.listaFormacion[indice]console.log()

    
    this.form = this.fb.group({

      institucion: [this.listaFormacion.institucion],
      programa: [this.listaFormacion.programa],
      nivel: [this.listaFormacion.nivel],
      estado: [this.listaFormacion.estado],

    });
    
  });

    this.createForm();
    this.update();
  }


update(){
  

}


actualizar(){

  this.serviceModal.disparadorFormacion3.emit({ data: this.data })
}


  createForm() {
    this.form = this.fb.group({

      institucion: ["", [Validators.required]],
      programa: ["", [Validators.required]],
      nivel: ["", [Validators.required]],
      estado: ["", [Validators.required]],

    });
  }


  enviar(form: any) {

    this.data = form;
    this.data.index = this.index;
   // this.data.sw = true;
    if(this.sw){
    this.serviceModal.disparadorFormacion3.emit({ data: this.data })
    }else{
    this.serviceModal.disparadorFormacion.emit({ data: this.data })
    }
    console.log(this.data); //en this.profileForm.value tenemos el valor del form para poder manipularlo a nuestro gusto. Si queremos acceder a, por ejemplo, un control especifico, podemos hacerlo con this.profileForm.controls['nombreControl']
    if (this.form.invalid) {
      // alert('Mensaje invalido');
    } else {
      //alert('Mensaje Valido');

    }
    this.form.reset();

  }

  cerrar() {
    this.form.reset();
  }


}
