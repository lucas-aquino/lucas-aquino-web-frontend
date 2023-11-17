import { 
  JetBrains_Mono,
  Abel
} from 'next/font/google'

export const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: [ 
    '200',
    '400',
    '700',
    '800',
  ],
  style: [
    'italic',
    'normal'
  ],
  display: 'swap',
  preload: true,
})

export const abel = Abel({
  subsets: ['latin'],
  weight: [ 
    '400'
  ],
  display: 'swap',
  preload: true,
})

