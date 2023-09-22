import { Component, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'ui-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  /** count widget title */
  @Input() countTitle!: string;

  /** count widget icon */
  @Input() icon!: string;
  /** set current step is active or not */
  public isActive: boolean;
  /** form instance */

  /** To get a reference to the child component without being sure about its type */
  @ContentChild('formSelector', { static: false }) childComponentRef: any;

  constructor() {
    this.isActive = false;
  }
}
