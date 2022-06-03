import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCity'
})
export class FilterCityPipe implements PipeTransform {

  transform(products: any[], category: string): any {
   // return products.filter(p => p.category == category);
   return null;
  }
}
