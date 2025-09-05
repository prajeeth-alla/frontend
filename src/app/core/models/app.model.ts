export interface JWTPayload {
  exp?: number;
  iat?: number;
  role?: string;
  [key: string]: any;
}

export interface Option {
  value: any;
  label: string;
}
