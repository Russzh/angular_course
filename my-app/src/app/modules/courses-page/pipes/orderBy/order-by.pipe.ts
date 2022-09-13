import {Pipe, PipeTransform} from '@angular/core';

import orderBy from "lodash/orderBy";

import {Course} from "@shared/";

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
  transform(array: Course[], sortBy: string): Course[] {
    if (array.length <= 1) {
      return array
    }

    return orderBy(array, sortBy);
  }
}
