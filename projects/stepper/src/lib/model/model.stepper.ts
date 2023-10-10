/**
 * @author Viral Patel
 * @description Data Type Models
 */

import { FormGroup } from "@angular/forms";

export interface StepperForm {
    /**
     * business logic form form submitting
     */
    submitForm(): void;
    /**
     * return your FormGroup, parent component will access this for validations
     */
    getFormData(): FormGroup;
}
/**
 * Shape of count widget 
 */
export type Shape = 'circle' | 'square'
/**
 *  Orientation of Progress count
 */
export type Orientation = 'vertical' | 'horizontal'

/**
 *  Css style for count widget 
 */
export interface CountWidgetStyles {
    colors: {
        [key: string]: string;
        default: string;
        background: string;
        active: string;
        activeBg: string;
        completed: string;
        completedBg: string;
    };
    shape?: Shape;
    orientation?: Orientation;
}
