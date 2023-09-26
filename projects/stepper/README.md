# Stepper
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

This library is created for stpper form with steps.

This Provide a steps with next previous and submit functionality.

  

## How to use
 
 ```javascript
- import StepperModule from stepper.
```
- use `<ui-stepper>` component as wrapper of steps
### component.html
```javascript
	<ui-stepper [customStyle]="myStyle">
	</ui-stepper>
```
### component.ts
```javascript
import { CountWidgetStyles } from 'stepper';
export class {
    public myStyle:CountWidgetStyles = {
        colors: {
                default:  '#008dff',	
                background:  '#e9ecef',	
                active:  '#3bcb44',
                activeBg:  '#e9ecef',
                completed:  '#ffffff',
                completedBg:  '#008DFF'
                },
        shape:  'circle',
        orientation:  'horizontal'
        }
    }
}
```

| Name | Type | Description |
| ------ | ------ | -------- |
| default | string | default color of step |
| background | string | default background color of step |
| active | string | active state step color |
| activeBg | string | active state background step color |
| complted | string | completed state step color |
| completedBg | string | completed state step background color |
| shape | Shape : circle ,square | shape of step |
| orientation | Orientation : horizontal , vertical | orientation |

- use `<ui-step>` selector for  your content as wrapper.
```javascript
<ui-stepper [customStyle]="myStyle">
    <ui-step countTitle="Basic Details">
        <header> <h3>Write your title e.g.Basic Details </h3></header>
        <app-your-form-selecter #formSelector></app-your-form-selecter>
    </ui-step>
</ui-stpper>
```

### Note - Please use #formSelector on form slector component
* Implement StpperForm Interface in yout form componet that you are using as slector.

### app-your-form.ts
```javascript
import { StepperForm } from 'stepper'
export class AppYourForm implements StepperForm    {
    public submitForm():void {
    //trigger this when next, previous or submit click
    }
    public getFormData:FormGroup<any> {
    //your from group instance 
        return this.myFrom
    }
}
```