import { ReturnStatement } from '@angular/compiler';
import { ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';


// export function Prohibited (prohibited: string) {
//   return (control: AbstractControl): ValidationErrors | null => {
//     if (control.value && control.value.toLowerCase().includes(prohibited)) {
//       return { prohibited: true };
//     }
//     return null;
//   };
// }

// export function avoidWord(fc:AbstractControl):{[errorName:string]:any} |null {
//     const notAllowed=/tourist/.test(fc.value);
//     //return notAllowed?{prohinited:{value:fc.value}}:null;
//     if (notAllowed == true){
//         return{
//             prohibited:{
//                 value:fc.value}};
//             } else return null;
//         }


export function prohibited (reg:RegExp): ValidatorFn{
 return (fc:AbstractControl) : ValidationErrors | null => {
   let notAllowed =reg.test (fc.value);

  if (notAllowed){
 return {
 prohibited: {value:fc.value}
    };
 }
 else{
     return null;
     }
  }
}
