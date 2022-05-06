import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataModalsService {

  @Output() disparadorExperiencia: EventEmitter<any> = new EventEmitter();
  @Output() disparadorFormacion: EventEmitter<any> = new EventEmitter();
  @Output() disparadorFormacion2: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
