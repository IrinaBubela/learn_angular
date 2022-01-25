import { FormControl, ValidationErrors } from '@angular/forms';

const ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9_]*$/;
const ALPHA_NUMERIC_VALIDATION_ERROR = { alphaNumericError: 'only alpha numeric values are allowed' }

export function alphaNumericValidator(control: FormControl): ValidationErrors | null {
    return ALPHA_NUMERIC_REGEX.test(control.value) ? null : ALPHA_NUMERIC_VALIDATION_ERROR;
}