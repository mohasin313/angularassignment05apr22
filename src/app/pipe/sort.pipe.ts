import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args: any[]): any {
    if(value == 'asc'){
      return args.sort();
    }else if(value == 'desc'){
      return args.reverse();
    }
  }

}
