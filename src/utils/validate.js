// Reusable validation helpers. Each returns an error string, or '' if valid.
// Usage: const err = required(value) || email(value);

export const required = (value) =>
  value === undefined || value === null || String(value).trim() === ''
    ? 'This field is required'
    : '';

export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be at least ${min} characters` : '';

export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be under ${max} characters` : '';

export const email = (value) =>
  value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? 'Enter a valid email address'
    : '';

export const number = (value) =>
  value !== '' && isNaN(Number(value)) ? 'Must be a number' : '';

export const min = (minVal) => (value) =>
  value !== '' && Number(value) < minVal ? `Must be at least ${minVal}` : '';

export const max = (maxVal) => (value) =>
  value !== '' && Number(value) > maxVal ? `Must be at most ${maxVal}` : '';

export const phone = (value) =>
  value && !/^\d{10}$/.test(value.replace(/\D/g, ''))
    ? 'Enter a valid 10-digit phone number'
    : '';

// Compose multiple validators, returns the first error found (or '')
export const compose = (...validators) => (value) => {
  for (const v of validators) {
    const err = v(value);
    if (err) return err;
  }
  return '';
};

// Validate a whole form object at once.
// schema = { fieldName: [required, email] }
// values = { fieldName: 'value' }
// returns { fieldName: 'error message' } for only the fields with errors
export function validateForm(values, schema) {
  const errors = {};
  for (const field in schema) {
    const validator = compose(...schema[field]);
    const err = validator(values[field]);
    if (err) errors[field] = err;
  }
  return errors;
}
