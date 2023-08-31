import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Nome Site',
    default : 'Nome Site'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
