import Header from './components/Header'
import Headero from './components/Headero'
// import Footer from './components/Footer'

import './globals.css'
import '../styles/globals.scss'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <Headero />
        </header>
        <main>

          {children}
        </main>
        <footer>
          {/* <Footer/> */}

        </footer>
      </body>
    </html>
  )
}
