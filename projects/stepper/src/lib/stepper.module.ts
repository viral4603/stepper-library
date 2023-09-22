import { NgModule } from '@angular/core';
import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './step/step.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    StepperComponent,
    StepComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StepperComponent,
    StepComponent
  ]
})
export class StepperModule { }
