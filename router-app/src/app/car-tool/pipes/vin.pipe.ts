import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vin'
})
export class VinPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
