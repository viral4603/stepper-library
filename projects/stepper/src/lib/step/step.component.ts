/**
 * @author Viral Patel
 * @description This component is for rendering header and main form.
 * It will get form instance through the 'formSelector' and get it states.
 */
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

  /** getter for form component refernce */
  public get childComponentRef(): any {
    return this._childComponentRef;
  }

  /** flag for check step is active or not */
  public isActive: boolean;

  /** To get a reference to the child component without being sure about its type */
  @ContentChild('formSelector', { static: false }) private _childComponentRef: any;

  constructor() {
    this.isActive = false;
  }
}
