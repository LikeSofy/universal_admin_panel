import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export function fileTypeValidator(types: string[]): ValidatorFn{
  return ((control: AbstractControl):ValidationErrors | null => {
    if (!control.value){
      return null
    }

    console.log(control.value?.type)

    if (types.indexOf(control.value?.type) != -1){
      return null
    }
    return {unsupportedType: "Not supported"}
  } )
}
