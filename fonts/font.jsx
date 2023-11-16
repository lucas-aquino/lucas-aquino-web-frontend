import { 
  JetBrains_Mono 
} from 'next/font/google'

export const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: [ 
    '200',
    '400',
    '700',
    '800',
  ],
  display: 'swap',
  preload: true,
})

