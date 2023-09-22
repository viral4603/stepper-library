import { Component } from '@angular/core';
import { CountWidgetStyles } from 'stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  public countWidgetStyles: CountWidgetStyles = {
    colors: {
      default: '#008DFF',
      background: '#e9ecef',
      active: '#3bcb44',
      activeBg: '#e9ecef',
      completed: '#ffffff',
      completedBg: '#008DFF'
    },
    shape: 'square',
    orientation: 'horizontal'
  }
}
