import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function translateY(duration:number, start:number, end:number) {
    return trigger('toggleState', [
          state('true', style({
            transform: 'translateY(' + end + 'pt)'
          })),
          state('false', style({
            transform: 'translateY(' + start + 'pt)'
          })),
          transition('true => false', animate(duration + 'ms ease-in')),
          transition('false => true', animate(duration + 'ms ease-out'))
    ]);
}
