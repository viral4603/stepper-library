# Stepper

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

This library is created for stpper form with steps and progress bar.

This Provide a progress bar with steps and next previous and submit functionality.


# How to use 
 - import StepperModule from stepper.
 - use <ui-stepper> component as wrapper of steps
    | Input | value | Description|
    |-------| ------ | --------- |
    | [customStyle] | CountWidgetStyles | add color and background color according state of step |

    ``` cpp
    <ui-stepper [customStyle]="myStyle">
        
    </ui-stpper>
    ```
 
- use <ui-step> inside <ui-stepper> as step of Stepper form
    | attribute | value | 
    |---------- | ----- | 
    | countTitle | provide title of widget in progress bar |  
     ``` cpp
    <ui-stepper [customStyle]="myStyle">
        <ui-step countTitle="myTitle">
            <header> <!-- step-widget-end --> </header>
            <app-your-form-selecter #formSelector></app-your-form-selecter>
        </ui-step>
    </ui-stpper>
    ```
    Note - Please use #formSelector on form slector component 
    * Implement StpperForm Interface in yout form componet that you are using as slector.
---