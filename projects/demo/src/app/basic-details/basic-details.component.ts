import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepperForm } from 'stepper';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements StepperForm {
  /** form instance of basic details form */
  public basicDetails: FormGroup;
  /** validition flag while user submit form */
  public isValid: boolean;
  /** subject for unsubscribe observable */
  // public unSubscribe: Subject<void>

  constructor(private fb: FormBuilder) {
    this.basicDetails = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      department: ['', Validators.required],
      position: ['', Validators.required]
    });
    this.isValid = true;
  }


  /** all form controls for validtion */
  get formContorls() {
    return this.basicDetails.controls
  }


  /**
   * Submit form data to presenter service
   * @param tab tab nuber where user will navigate after form submit
   */
  public submitForm(): void {
    console.log(this.basicDetails.value)
  }

  /** get form group for parent access */
  getFormData(): FormGroup<any> {
    return this.basicDetails
  }

}
