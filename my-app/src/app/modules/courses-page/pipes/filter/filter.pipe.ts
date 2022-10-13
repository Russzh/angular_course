import {Pipe, PipeTransform} from '@angular/core';

import {ICourse} from "@shared/";

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(array: ICourse[], searchValue: string): ICourse[] {
    const searchUCVal: string = searchValue.toUpperCase();

    return array?.filter((item => item.title.toUpperCase().includes(searchUCVal)))
  }
}

