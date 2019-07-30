import { trigger, style, animate, transition } from '@angular/animations';

export const slideLeft = trigger('slide-left', [
  transition(':enter', [
    style({ transform: 'translateX(100%)', opacity: 0 }),
      animate('300ms', style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0)', opacity: 1 }),
      animate('300ms', style({ transform: 'translateX(100%)', opacity: 0 }))
    ])
  ]
);
