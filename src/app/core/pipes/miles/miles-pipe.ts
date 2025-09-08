import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miles'
})
export class MilesPipe implements PipeTransform {

  transform(value: number | null | undefined, showUnit: boolean = true): string {
    if (value == null || isNaN(value)) return 'N/A';

    // Format number with commas
    const formatted = value.toLocaleString();

    return showUnit ? `${formatted} miles` : formatted;
  }

}
