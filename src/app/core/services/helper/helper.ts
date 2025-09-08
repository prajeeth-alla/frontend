import { Injectable } from '@angular/core';
import { Option } from '../../../core/models/app.model';

@Injectable({
  providedIn: 'root',
})
export class Helper {
  isMock = true;
  public toSelectOptions<T>(source: T[], labelKey: keyof T, valueKey: keyof T): Option[] {
    return source.map((item) => ({
      value: item[valueKey],
      label: String(item[labelKey]),
    }));
  }

  public binarySearch<T, K extends keyof T>(source: T[], target: T[K], key: K): T | null {
    // Ensure elements are comparable
    type Comparable = string | number;
    if (typeof target !== 'string' && typeof target !== 'number') {
      throw new Error('Target must be a string or number');
    }

    // Sort the array by the key
    const sortedSource = [...source].sort((a, b) => {
      const valA = a[key] as Comparable;
      const valB = b[key] as Comparable;
      if (valA < valB) return -1;
      if (valA > valB) return 1;
      return 0;
    });

    let left = 0;
    let right = sortedSource.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const midValue = sortedSource[mid][key] as Comparable;

      console.log(midValue);
      // console.log(target);
      
      
      if (midValue === target) return sortedSource[mid];
      if (target < midValue) right = mid - 1;
      else left = mid + 1;
    }

    return null;
  }
}
