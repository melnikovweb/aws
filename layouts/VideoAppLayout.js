import { LanguageProvider } from 'components/Language/LanguageContext'
import Header from 'components/Video/ui/Header'
import Footer from 'components/Video/ui/Footer'

import styles from 'pages/video/Video.module.less'

const VideoAppLayout = ({ children }) => {
  return (
    <LanguageProvider>
      <div className={styles['video-style']}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default VideoAppLayout
