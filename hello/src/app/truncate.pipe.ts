import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(stringtext: string, val: number): string {

   return stringtext.substring(0,val);
    
  }

}
