import { 
  JetBrains_Mono,
  Abel,
  Poppins,
  Archivo
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


export const  poppins = Poppins({
  subsets: ['latin'],
  weight: [ 
    '200'
  ],
  style: [
    'normal'
  ],
  display: 'swap',
  preload: true,
})

export const archivo = Archivo({
  subsets: ['latin'],
  weight: [ 
    '200',
    '300',
    '400',
    '700',
    '800',
  ],
  style: [
    'normal'
  ],
  display: 'swap',
  preload: true,
})
