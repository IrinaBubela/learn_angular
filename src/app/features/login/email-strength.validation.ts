import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createEmailStrengthValidator(): ValidatorFn{
    return (control: AbstractControl) : ValidationErrors | null => {
        const value = control.value;

        if (!value){
            return null;
        }

        const hasLowerCase = /[a-z]+/.test(value);
        

        return !hasLowerCase ? {passwordStrength:true} : null;
    }
}