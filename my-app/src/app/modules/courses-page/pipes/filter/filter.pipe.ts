import {Pipe, PipeTransform} from '@angular/core';

import {Course} from "@shared/";

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(array: Course[] | undefined, searchValue: string): Course[] | undefined {
    const searchUCVal: string = searchValue.toUpperCase();

    return array?.filter((item => item.title.toUpperCase().includes(searchUCVal)))
  }
}

