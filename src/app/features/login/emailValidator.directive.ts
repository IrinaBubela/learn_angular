import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from '@angular/forms';

@Directive({
    selector: "[emailValidator]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting:EmailValidatorDirective,
        multi: true
    }]
})

export class EmailValidatorDirective implements Validator {

    validate(control: AbstractControl): ValidationErrors | null {
        return this.createEmailStrengthValidator()(control);
    }

    createEmailStrengthValidator(): ValidatorFn{
        return (control: AbstractControl) : ValidationErrors | null => {
            const value = control.value;
            if (!value) return null;

            const lengthMoreThree = value.length >=3;
                
            return !lengthMoreThree ? {passwordStrength:true} : null;
        }
    }
}