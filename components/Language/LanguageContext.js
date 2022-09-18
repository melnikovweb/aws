import { createContext, useState } from 'react'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setLanguage] = useState('en')
  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        changeLanguage: language => setLanguage(language),
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export const LanguageConsumer = LanguageContext.Consumer

export default LanguageContext
