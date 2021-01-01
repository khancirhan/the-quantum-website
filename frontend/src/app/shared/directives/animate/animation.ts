import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  state(
    'hidden',
    style({ opacity: 0, transform: 'translate3d(0, {{ yTranslate }}, 0)' }),
    { params: { yTranslate: '40px' } }
  ),
  state('visible', style({ opacity: 1, transform: 'translate3d(0, 0, 0)' })),
  transition(
    'hidden  => visible',
    animate('{{ duration }} {{ delay }} {{ easing }}'),
    {
      params: {
        duration: '0.6s',
        delay: '0.2s',
        easing: 'ease-out',
      },
    }
  ),
]);

export const zoomIn = trigger('zoomIn', [
  state('hidden', style({ opacity: 0, transform: 'scale3d(0.9, 0.9, 0.9)' })),
  state('visible', style({ opacity: 1, transform: 'scale3d(1, 1, 1)' })),
  transition(
    'hidden  => visible',
    animate(
      '{{ duration }} {{ delay }} {{ easing }}',
      keyframes([
        style({ offset: 0, opacity: 0, transform: 'scale3d(0.9, 0.9, 0.9)' }),
        style({ offset: 0.5, opacity: 0.6, transform: 'scale3d(1, 1, 1)' }),
        style({ offset: 1, opacity: 1 }),
      ])
    ),
    {
      params: {
        duration: '1.2s',
        delay: '0.2s',
        easing: 'ease-out',
      },
    }
  ),
]);
