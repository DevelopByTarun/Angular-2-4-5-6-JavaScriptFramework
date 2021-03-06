import {trigger, animate, state, style, transition, keyframes} from '@angular/animations';

export const ROTATE_ANIMATION = trigger('rotateBookName', [
  state('unChange', style({
    backgroundColor: '#E5E7E9',
    color: '#1C2833',
    fontSize: '1em',
    fontFamily: 'verdana',
    transform: 'scale(2) rotate(0deg)'
  })),
  state('change', style({
    backgroundColor: '#17202A',
    color: '#F0F3F4',
    fontSize: '1.5em',
    fontFamily: 'cursive',
    transform: 'scale(2.5) rotate(180deg)'
  })),
  transition('unChange => change', animate('5s 100ms ease-in', keyframes([
    style({
      backgroundColor: 'yellow',
      fontSize: '1.1em',
      offset: '0.1'
    }),
    style({
      backgroundColor: 'green',
      fontSize: '1.2em',
      offset: '0.3'
    }),
    style({
      backgroundColor: 'blue',
      fontSize: '1.3em',
      offset: '0.5'
    })
  ]))),
  transition('change => unChange', animate('5s 100ms ease-out', keyframes([
    style({
      backgroundColor: 'yellow',
      fontSize: '1.4em',
      offset: '0.1'
    }),
    style({
      backgroundColor: 'green',
      fontSize: '1.3em',
      offset: '0.3'
    }),
    style({
      backgroundColor: 'red',
      fontSize: '1.2em',
      offset: '0.5'
    })
  ])))
]);
