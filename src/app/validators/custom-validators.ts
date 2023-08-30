import {FormControl, ValidationErrors} from "@angular/forms";

export class CustomValidators {

  // whitespace validation
  static notOnlyWhitespace(control: FormControl) : ValidationErrors | null {

    // check if string contains only whitespace
    if ((control.value != null) && (control.value.trim().length === 0)) {
      // invalid, return error object
      return { 'notOnlyWhiteSpace' : true };
    }

    // valid - return null
    return null;
  }
}
