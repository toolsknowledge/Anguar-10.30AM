import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    //value -- angular13
    //args[0] -- to
    //arg[1] -- welcome
    return args[1]+" "+args[0]+" "+value;
  }

}
