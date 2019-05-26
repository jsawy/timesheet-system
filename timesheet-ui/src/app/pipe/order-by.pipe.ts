import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], args?: any): any {
    const temp = array.sort(function (a, b) {
      if (typeof a[args.property] === 'string') {
        return (
          (a[args.property].toLowerCase() < b[args.property].toLowerCase())
          ? -1
          : ((a[args.property].toLowerCase() > b[args.property].toLowerCase())
            ? 1
            : 0)
          );
      } else {
        return ((a[args.property] < b[args.property]) ? -1 : ((a[args.property] > b[args.property]) ? 1 : 0));
      }
    });
    if (args.direction) {
      return temp.reverse();
    }
    return temp;
  }

}
