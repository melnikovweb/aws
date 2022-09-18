import { useRouter } from 'next/router'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Breadcrumbs from 'components/Breadcrumbs'
import { LanguageProvider } from 'components/Language/LanguageContext'

const DefaultAppLayout = ({ children }) => {
  const route = useRouter()
  return (
    <LanguageProvider>
      <Header />
      <main className="content">
        {route.route !== '/' ? (
          <div className="container">
            <Breadcrumbs />
          </div>
        ) : null}

        {children}
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default DefaultAppLayout
