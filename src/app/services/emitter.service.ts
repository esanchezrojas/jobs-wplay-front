
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  constructor() { }
  
  @Output() disparadorLogin: EventEmitter<any> = new EventEmitter();
  
 
}
