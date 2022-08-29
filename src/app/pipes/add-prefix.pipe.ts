import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPrefix'
})
export class AddPrefixPipe implements PipeTransform {

  transform(value:string): string {
    return "Pharma "+value;
  }

}
