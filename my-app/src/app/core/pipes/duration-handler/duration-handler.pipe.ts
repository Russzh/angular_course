import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'durationHandlerPipe'
})

export class DurationHandlerPipe implements PipeTransform {
  transform(duration: number): string {
    const MIN_IN_HOUR: number = 60;
    const divisionOfDuration: number = duration / MIN_IN_HOUR;
    const remainderOfDivision: number = duration % MIN_IN_HOUR;
    let handledDuration: string;

    if (duration >= MIN_IN_HOUR) {
      remainderOfDivision
        ? handledDuration = `${Math.floor(divisionOfDuration)} h ${remainderOfDivision} min`
        : handledDuration = `${divisionOfDuration} h`
    } else {
      handledDuration = duration ? `${duration} min` : ''
    }
    return handledDuration
  }
}
