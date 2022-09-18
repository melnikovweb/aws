import { useRouter } from 'next/router'

import Head from 'components/head'
import Mind from 'components/Home/ui/Mind'
import Cover from 'components/Home/ui/Cover'
import Works from 'components/Portfolio/ui/Works'
import Reviews from 'components/Reviews/Reviews'
import WhatWeCanDo from 'components/Home/ui/WhatWeCanDo'
import RequestExperts from 'components/RequestExperts'
import BannerPromo from 'components/BannerPromo'
import ContactUs from 'components/ContactUs'

import reasonsList from 'datastore/Home_ReasonsList'

const Home = ({ metaData, brandInfo, externalTracks }) => {
  const router = useRouter()

  const goToContact = () => {
    router.push('/contact').then(() => window.scrollTo(0, 0))
  }

  return (
    <div className="page page-home">
      <Head
        {...metaData}
        metaTitle="Custom Software Development Company From Ukraine | Binerals"
        metaDescription="Binerals Is a Custom Software Development Company From Ukraine. ✓ We Offer It Outsourcing Services of Top-Notch Quality and Business Value-Driving Potential. ✓ Get in Touch With Us to Outline Your Development Strategy."
        brandInfo={brandInfo}
        externalTracks={externalTracks}
      />
      <Cover className="page-home__cover" />
      <RequestExperts
        items={reasonsList}
        title={'Most common reasons when companies hire us'}
        isTitleUppercase
        hasAction
        actionText={'Request Binerals Experts'}
        handleAction={goToContact}
      />
      <BannerPromo
        className="page-home__promo"
        isWide
        isLarge
        isTextLarge
        hasLogo
      >
        Our <strong> Cutting Edge Technologies </strong> and{' '}
        <strong> Knowledge of Business Management</strong> helps to overcome
        common difficulties in outsourcing.
      </BannerPromo>
      <WhatWeCanDo />
      <BannerPromo
        className="page-home__promo"
        isWide
        isMedium
        isTextLarge
        hasLogo
      >
        We will help you learn about our IT services options and give you the
        information you need to make an informed decision on which service you
        need and will deliver the results you want
      </BannerPromo>
      <Mind className="page-home__process page-box" />
      <Works className="page-home__works page-box container" />
      <Reviews
        className="page-home__reviews page-box"
        title={'Clients about us'}
        uppercaseTitle
        alignTitleCenter
      />
      <div className="container-fluid">
        <ContactUs
          className="page-home__contact-us page-box"
          cta="?cta=drop_us_home&page=home"
        >
          <h2 className="page-box__title">DROP US A LINE!</h2>
        </ContactUs>
      </div>
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

export default Home

// import Head from "../components/head";
// import Nav from "../components/nav";
