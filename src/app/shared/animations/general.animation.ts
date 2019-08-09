import { trigger, style, animate, transition, keyframes } from '@angular/animations';

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

export const fadeOut = trigger('fadeOut', [
  transition('void => *', [
    animate('300ms ease-in', keyframes([
      style({
        opacity: 0,
        transform: 'translateY(70px)',
        offset: 0
      }),
      style({
        opacity: 1,
        transform: 'translateY(0)',
        offset: 1
      })
    ]))
  ])
]);
