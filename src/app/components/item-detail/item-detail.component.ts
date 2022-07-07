import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../../services/data.service';
import { VacantesListComponent } from '../vacantes-list/vacantes-list.component';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  
  vacantes: any[] = [];
  
  totalVacantes = 0;
  

  
  
  public id:any;
  public response:any = [];
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe( (paramMap:any) =>{
      const {params} = paramMap
    
      this.cargarData(params.variable)
    })
    
    
  }

  cargarData(ide:number){

    this.dataService.getListado()
    .subscribe((res:any)=>{
      
      for (let i=0; i<res.length;i++){
      if (res[i].id == ide){
        this.response = res[i];
        
      }
    }
     
      });
     }
     





  

  

  
  
 

}
