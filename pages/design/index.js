import { LanguageProvider } from 'components/Language/LanguageContext'
// import { useMediaQuery } from "react-responsive";
// import { HashLink } from "react-router-hash-link";
import Link from 'next/link'

import SectionReviews from 'components/Reviews/Reviews'

import Head from 'components/head'
import ContactUsForm from 'components/Design/ui/ContactUsForm'
import ContactUsBanner from 'components/Design/ui/ContactUsBanner'
import Work from 'components/Design/ui/Work'
import CoverBG from 'components/Design/ui/Cover'
import Logo from 'components/Design/ui/Logo'

import Tags from 'components/Tags'

import DesignAppLayout from 'layouts/DesignAppLayout'

import WorkList from 'datastore/Portfolio_WorksList'

const Design = props => {
  const { metaData, brandInfo, externalTracks } = { ...props }
  const tags = [{ title: 'iOS' }, { title: 'Android' }, { title: 'WebSite' }]

  const isBigScreen = true //useMediaQuery({ query: "(min-device-width: 1100px)" });

  return (
    <LanguageProvider>
      <Head
        {...metaData}
        brandInfo={brandInfo}
        externalTracks={externalTracks}
      />
      <div className="page-design">
        <div className="page-design__top">
          {isBigScreen && <CoverBG className="page-design__cover-img" />}
          <div className="page-design__top-content">
            <div className="page-design__pre-title">BINERALS DESIGN</div>
            <h1>World-Class Designers & Artist</h1>
            <a className="button">Hire Now</a>
            <p>
              We provide fantastic web design & tailor-made graphic services for
              our clients to win on any platform.
            </p>
            <p>
              No matter how small or large your project, Binerals offer a
              personalized, engaging, and intuitive UX design experience for
              everyone who wants to stand out from the crowd, create Brand
              Identity, increase conversion ratios, and knock out their
              competition.
            </p>
          </div>
        </div>
        <div className="page-design__center">
          <div className="page-design__nav">
            <Logo className="page-design__nav-logo logo" />
            <div className="page-design__nav-content">
              <Link href="/#design-works">
                <a className="menu-link">Works</a>
              </Link>
              <Link href="/#design-testimonials">
                <a className="menu-link">Testimonials</a>
              </Link>
              <Link href="/#design-contacts">
                <a className="menu-link-contacts button button--empty">
                  Contacts
                </a>
              </Link>
            </div>
            <div className="page-design__nav-tags">
              <Tags list={tags} />
            </div>
          </div>
          <section id="design-works" className="page-design__works">
            {WorkList.map((work, index) => (
              <Work
                className="page-design__work"
                work={work}
                key={`page-design-work-${index}`}
                brandInfo={brandInfo}
              />
            ))}
          </section>
          <section
            id="design-testimonials"
            className="page-design__testimonials"
          >
            <h2 className="page-box__title">Testimonials</h2>
            <SectionReviews />
          </section>
        </div>
        <div className="banner-promo">
          <section id="design-contacts" className="page-design__contacts">
            <h2>FEEL FREE TO DROP US A LINE BELOW</h2>
            <div className="page-design__contacts-content">
              <ContactUsForm className="page-design__form" />
              <ContactUsBanner
                className="page-design__banner"
                brandInfo={brandInfo}
              />
            </div>
          </section>
        </div>
      </div>
    </LanguageProvider>
  )
}

Design.layout = DesignAppLayout

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

export default Design
