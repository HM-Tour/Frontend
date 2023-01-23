import Header from './components/Header'
import Headero from './components/Headero'
import Footer from './components/Footer'

import AuthWrapper from './contexts/auth';

import './globals.css'
import '../styles/globals.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <AuthWrapper>
        <body>

          <header>
            <Headero />
          </header>

          <main>

            {children}
          </main>

          <footer>
            <Footer />
          </footer>

        </body>
      </AuthWrapper>
    </html>
  )
}