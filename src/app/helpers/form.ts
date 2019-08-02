import { FormField } from '../models/form';

export function makeFormField(value?: string): FormField {
  return { value: value || '', dirty: false, formatted: null, error: null, errorMode: null };
}

export function makeFormFieldOfType<T>(value: T): FormField<T> {
  return { value, dirty: false, formatted: null, error: null, errorMode: null };
}

export function isValidEmail(email: string): boolean {
  // Below: a woefully inadequate email regex tester
  return /(\S+?)@(\S+?)([.\S]+)/.test(email);
}

export function isValidPassword(password: string): boolean {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#\\$%&'()*+,-.:;<=>?@[\]\^_`{|}~])(?=.{8,50}$)/
  .test(password);
}

export function validatePassword(password: FormField) {
    if (password.value.length === 0) {
      password.error = 'Password Required';
    } else {
      password.error = !isValidPassword(password.value) ? 'Uppercase, lowercase, number, special character required' : '';
    }
  }

