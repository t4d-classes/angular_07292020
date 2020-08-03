import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAppend'
})
export class MyAppendPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {

    let initial: string;

    if (value == null) {
      initial = '';
    } else {
      initial = String(value);
    }

    return args.reduce<string>( (result, arg) => {

      if (arg == null) {
        return result;
      }

      return result + String(arg);

    }, initial);
  }

}
