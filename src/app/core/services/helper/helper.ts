import { Injectable } from '@angular/core';
import { Option } from '../../../core/models/app.model';

@Injectable({
  providedIn: 'root',
})
export class Helper {
  // TODO: Remove it once API endpoint is stable
  // This flag is only for development purpose
  isMock = false;
  public toSelectOptions<T>(source: T[], labelKey: keyof T, valueKey: keyof T): Option[] {
    return source.map((item) => ({
      value: item[valueKey],
      label: String(item[labelKey]),
    }));
  }
}
