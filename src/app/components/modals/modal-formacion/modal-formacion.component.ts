import { Component, OnInit } from '@angular/core';
import { GeneralData } from 'src/app/config/general-data';

@Component({
  selector: 'app-modal-formacion',
  templateUrl: './modal-formacion.component.html',
  styleUrls: ['./modal-formacion.component.css']
})
export class ModalFormacionComponent implements OnInit {

  public estados = GeneralData.ESTADOS_FORMACION;
  public niveles = GeneralData.NIVELES_ACADEMICOS;
  constructor() { }

  ngOnInit(): void {
  }

}
