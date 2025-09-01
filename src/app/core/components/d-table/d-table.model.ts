export interface DTableModel {
  headers: TableHeader[];
  data: TableRow[];
}

export interface TableHeader {
  key: string;
  label: string;
}

export type TableRow = Record<string, unknown>;