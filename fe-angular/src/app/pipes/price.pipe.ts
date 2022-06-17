import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricePipe'
})
export class PricePipe implements PipeTransform {

  transform(value: number): string {
    return `${value}RSD`;
  }

}
