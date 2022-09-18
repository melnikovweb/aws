import { useState } from 'react'
import PageTitle from 'components/PageTitle'
import BannerPromo from 'components/BannerPromo'

import Head from 'components/head'
import PopupThankYou from 'components/Popup/ContactThankYou'
import ContactForm from 'components/ContactUs/ui/Form'
import ContactBanner from 'components/ContactUs/ui/Banner'

const ContactUs = ({ metaData, brandInfo, externalTracks }) => {
  const [isShowPopup, useIsShowPopup] = useState(false)

  return (
    <div className="page page-contact-us">
      <PopupThankYou
        isShown={isShowPopup}
        onClose={() => {
          useIsShowPopup(false)
        }}
      />
      <Head
        {...metaData}
        brandInfo={brandInfo}
        externalTracks={externalTracks}
      />
      <div className="page__header">
        <PageTitle className="page__title">
          <h1>FEEL FREE TO DROP US A LINE BELOW</h1>
        </PageTitle>
      </div>
      <div className="page__content container">
        <ContactBanner />
        <ContactForm sendHandler={() => useIsShowPopup(true)} />
      </div>
      <BannerPromo className="page-contact-us__promo" isTextLarge>
        We make things <strong>good</strong>, we make things{' '}
        <strong> big</strong>, we make things <strong>fast</strong>
      </BannerPromo>
    </div>
  )
}

import InitialDataLoader from 'lib/InitialDataLoader'

export async function getStaticProps(_) {
  const data = await InitialDataLoader()
  return {
    revalidate: 3600, // revalidate every one hour
    props: {
      ...data,
    },
  }
}

export default ContactUs
