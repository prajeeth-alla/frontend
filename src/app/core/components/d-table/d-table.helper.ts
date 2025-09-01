import { DTableModel, TableHeader } from "./d-table.model";

/**
 * Converts an array of objects into a table-friendly format.
 * @param items The array of objects to transform
 * @returns TableData with headers and data
 */
export function transformToDTableData<T extends Record<string, any>>(items: T[]): DTableModel {
  if (items.length === 0) {
    return { headers: [], data: [] };
  }

  const headers: TableHeader[] = Object.keys(items[0]).map(key => ({
    key,
    label: formatHeaderLabel(key)
  }));

  return {
    headers,
    data: items
  };
}

/**
 * Helper to format labels nicely:
 * - Replaces underscores with spaces
 * - Capitalizes each word
 */
export function formatHeaderLabel(key: string): string {
  return key
    .replace(/_/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}