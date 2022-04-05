import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any, args:any[]): any {
    let array=[];
    for (var j=0; j<args.length; j++) {
      if (args[j].match(value)){
        array.push(args[j]);
      }
    }
    return array
  }

}
