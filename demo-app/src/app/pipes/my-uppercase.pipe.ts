import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase'
})
export class MyUppercasePipe implements PipeTransform {

  transform(value: unknown): unknown {

    if (value == null) {
      return '';
    }

    return String(value).toUpperCase();
  }

}
