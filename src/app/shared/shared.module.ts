import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomValidatorDirective } from './custom-validator.directive';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    CustomValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule
   
  ],
  exports: [
      CustomValidatorDirective
  ]
})
export class SharedModule { }
