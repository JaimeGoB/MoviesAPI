import { AbstractControl, ValidatorFn } from "@angular/forms";

export function firstLetterUppercase(): ValidatorFn {
    return (control: AbstractControl) => {

        //Check if field is non empty or null
        const value = <string>control.value;
        if(!value) return;
        if(value.length === 0) return;

        //Get first letter
        const firstLetter = value[0];

        /* This will return an object that contains an error message */
        if(firstLetter !== firstLetter.toUpperCase()){
            return {
                firstLetterUppercase : {
                    message: 'The first letter must be uppercase'
                }
            }
        }

        return;
    }
}