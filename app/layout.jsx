
import Headero from './components/Headero'
import Footer from './components/Footer'
import React from 'react';
import AuthWrapper from './contexts/auth';
import HeaderWrapper from './contexts/headerauth';

import './globals.css'
import '../styles/globals.scss'

export default function RootLayout({ children }) {
  return (
    <AuthWrapper>
    
    <html lang="en">

     
        <body>
        
          <header>
          
            <HeaderWrapper />
    
          </header>

          <main>

            {children}
          </main>

          <footer>
            <Footer />
          </footer>

        
        </body>
     
    </html>
    
          </AuthWrapper>
  )
}