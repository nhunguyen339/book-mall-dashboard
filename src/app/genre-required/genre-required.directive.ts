import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[genreValidator]',
  // We add our directive to the list of existing validators
  providers: [
    { provide: NG_VALIDATORS, useExisting: GenreValidator, multi: true }
  ]
})
export class GenreValidator implements Validator {
  // This method is the one required by the Validator interface
  validate(c: FormControl): ValidationErrors | null {
    // Here we call our static validator function
    return GenreValidator.validateCcNumber(c);
  }
  static validateCcNumber(control: FormControl): ValidationErrors {
    if ( control.value == null
    ) {
      // Return error if card is not Amex, Visa or Mastercard
      return { genreError: 'Genre is required.' };
    }
    // If no error, return null
    return null;
  }
}
