import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'akhil'
})
export class AkhilPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return Array.from(value).reverse().join("");
  }

}
