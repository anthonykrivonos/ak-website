import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function translateX(duration:number, start:number, end:number) {
    return trigger('toggleXState', [
          state('true', style({
            transform: 'translateX(' + end + 'pt)'
          })),
          state('false', style({
            transform: 'translateX(' + start + 'pt)'
          })),
          transition('true => false', animate(duration + 'ms ease-in')),
          transition('false => true', animate(duration + 'ms ease-out'))
    ]);
}
