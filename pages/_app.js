import { createContext, useEffect } from 'react'
import NextHead from 'next/head'
import Link from 'next/link'
import CookieConsent from 'react-cookie-consent'

import OrganizationSchema from 'components/OrganizationSchema'

import DefaultAppLayout from 'layouts/DefaultAppLayout'

import 'public/styles/styles.less'

const DataContext = createContext()

const App = ({ Component, pageProps, footerData }) => {
  const Layout = Component.layout || DefaultAppLayout

  useEffect(() => {
    if (!localStorage.getItem('referer')) {
      if (document.referrer) {
        localStorage.setItem('referer', document.referrer)
      } else {
        localStorage.setItem('referer', location.href)
      }
    }
  }, [])

  return (
    <DataContext.Provider value={{ footerData }}>
      <NextHead>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </NextHead>
      <OrganizationSchema brandInfo={pageProps.brandInfo} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        disableStyles={true}
        containerClasses="cookies-banner"
        buttonWrapperClasses="cookies-banner__button"
        buttonClasses="button"
        disableButtonStyles={true}
        expires={150}
        //debug={true}
      >
        <div className="cookies-banner__title">We use cookies</div>
        This website uses cookies for analytics, personalization, and
        advertising. If you continue to use our website, you consent to our{' '}
        <Link href="/cookies-policy">
          <a className="link">Cookies Policy</a>
        </Link>
      </CookieConsent>
    </DataContext.Provider>
  )
}

export default App
