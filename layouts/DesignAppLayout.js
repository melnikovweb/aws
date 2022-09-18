import Footer from 'components/Footer'
import { LanguageProvider } from 'components/Language/LanguageContext'

const DesignAppLayout = ({ children }) => {
  return (
    <LanguageProvider>
      <main>{children}</main>
      <Footer />
    </LanguageProvider>
  )
}

export default DesignAppLayout
