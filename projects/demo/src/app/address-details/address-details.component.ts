import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StepperForm } from 'stepper';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements StepperForm {
  /** form instance of address form */
  public addressForm: FormGroup;
  /** validation flag when user submit form */
  public isValid: boolean;

  /** get form controls for valditation */
  public get formContorls() {
    return this.addressForm.controls
  }
  /** valid state for from */
  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      address: ['', Validators.required],
      streetAddress: ['', Validators.required],
      pinCode: ['', Validators.required],
    });
    this.isValid = true;
  }



  ngOnInit(): void {
    /**patch form value from local storage */
  }

  /**
   * @description submit form data and neavigate to next tab
   * @param tab next tab value
   */
  public submitForm() {
      console.log(this.addressForm.value)
  }


  /** get form group for parent access */
  getFormData(): FormGroup<any> {
    return this.addressForm
  }
}
