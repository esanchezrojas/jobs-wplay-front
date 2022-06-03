import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg : any): any {
   
    const resultPosts = [];
    if(arg == '' || arg.length < 2) return value;
    for(const pos of value){
      if(pos.nombreVacante.toLowerCase().indexOf(arg.toLowerCase())> -1){
          resultPosts.push(pos);
      }
    }
    return resultPosts;
  
}

}