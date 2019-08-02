export interface FormField<T = string> {
  value: T;
  formatted: string | null;
  dirty: boolean;
  error: string | null;
  errorMode: string | null;
}
