import Header from 'components/Header'
import Footer from 'components/Footer'
import { LanguageProvider } from 'components/Language/LanguageContext'

const ReferralAppLayout = ({ children }) => {
  return (
    <LanguageProvider>
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </LanguageProvider>
  )
}

export default ReferralAppLayout
