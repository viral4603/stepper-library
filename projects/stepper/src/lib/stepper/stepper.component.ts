/**
 * @author Viral Patel
 * @description This compnent is for handling next, previous, submit and chnage state of step component.
 */
import { AfterContentInit, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { CountWidgetStyles } from '../model/model.stepper';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'ui-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StepperComponent implements AfterContentInit {

  /** set count widget style */
  @Input() public set customStyle(styles: CountWidgetStyles) {
    if (styles) {
      //set widget colors
      for (let key in styles.colors) {
        this.rootElement.style.setProperty(`--${key}`, styles.colors[key]);
      }
      this.widgetStyle = styles
    }
  }

  /** get steps component */
  @ContentChildren(StepComponent) steps!: QueryList<StepComponent>;

  /** active step number */
  public currentStep: number;

  /** current active form instance */
  public currentForm!: StepComponent;

  /** root elemnet refernce for setting css varible */
  public rootElement: HTMLElement;

  /** custome style for widget */
  public widgetStyle!: CountWidgetStyles;

  /** get current form validation state */
  get isCurrentFormValid(): boolean {
    return this.currentForm.childComponentRef.getFormData().valid
  }

  constructor() {
    this.currentStep = 0;
    this.rootElement = document.querySelector(':root') as HTMLElement
  }

  ngAfterContentInit(): void {
    this.currentForm = this.steps.toArray()[this.currentStep]
    this.toggleCurrentFormState()
  }

  /**
   * @description Navigate to the next form
   */
  public next() {
    if (this.currentStep < this.steps.length - 1) {
      this.submitForm()
      this.toggleCurrentFormState()
      this.currentStep++;
      this.currentForm = this.steps.toArray()[this.currentStep]
      this.toggleCurrentFormState()
    }
  }

  /**
   * @description Nacigate to the previous form
   */
  public prev() {
    if (this.currentStep > 0) {
      this.submitForm()
      this.toggleCurrentFormState()
      this.currentStep--;
      this.currentForm = this.steps.toArray()[this.currentStep]
      this.toggleCurrentFormState()
    }
  }


  /**
   * @description toggle current active form state
   */
  public toggleCurrentFormState() {
    this.currentForm.isActive = !this.currentForm.isActive;
  }

  /**
   * @description Navigate to the form directly
   * @param stepIndex index number of form 
   */
  public navigateToStep(stepIndex: number) {
    this.submitForm()
    this.currentStep = stepIndex;
    this.toggleCurrentFormState();
    this.currentForm = this.steps.toArray()[this.currentStep]
    this.toggleCurrentFormState()
  }

  /**
   * @description invoke submit of form component ref
   */
  public submitForm() {
    if (this.isCurrentFormValid) {
      this.currentForm.childComponentRef.submitForm()
    }
  }

}
