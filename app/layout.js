import {AuthProvider} from './providers'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mood Tracker',
  description: 'An app created by me, Brandon Aldred',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body data-mode="light">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
