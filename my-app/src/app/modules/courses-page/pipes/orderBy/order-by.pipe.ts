import {Pipe, PipeTransform} from '@angular/core';

import orderBy from "lodash/orderBy";

import {ICourse} from "@shared/";

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
  transform(array: ICourse[], sortBy: string): ICourse[] {
    if (array.length <= 1) {
      return array
    }

    return orderBy(array, sortBy);
  }
}
