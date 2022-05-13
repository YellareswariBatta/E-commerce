import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val:any) => {
      let rVal = (val.pass.toString().toLowerCase().includes(args) || val.id.toString().toLowerCase().includes(args)) || (val.email.toLowerCase().includes(args));
      return rVal;
    })

  }

}
