import { Fragment } from 'react'
import Link from 'next/link'

import Head from 'components/head'

import PageTitle from 'components/PageTitle'
import SectionContactUs from 'components/ContactUs'

import list from 'datastore/Services_ServicesList'

const Services = ({ metaData, brandInfo, externalTracks }) => (
  <div className="page page-servicess">
    <Head
      {...metaData}
      metaTitle="Services | Binerals"
      metaDescription="List of Services Binerals Provide"
      brandInfo={brandInfo}
      externalTracks={externalTracks}
    />
    <div className="page__header container">
      <PageTitle className="page__title">
        <h1>OUR SERVICES</h1>
      </PageTitle>
      <h3 className="page__description">
        Binerals offers a full range of services from graphic and UX design
        through to robust web platforms development and everything in between.
        Take advantage of our services to develop competitive software with high
        ROI
      </h3>
    </div>

    <div className="page__content">
      <div className="container-fluid">
        {list.map(
          ({ Icon, id, title, description, parts, otherLink }, index) => (
            <Fragment key={'service' + index}>
              <div className="service" {...(id ? { id: id } : {})}>
                <div className="service__header">
                  <div className="service__icon">
                    <Icon />
                  </div>
                  <h4 className="service__title highlight">{title}</h4>
                </div>
                <div className="service__content">
                  {description.map((text, descriptionIndex) => (
                    <p
                      key={'service' + index + 'description' + descriptionIndex}
                    >
                      {text}
                    </p>
                  ))}
                  {otherLink ? (
                    <Link href="/other/services">
                      <a className="service__other-link">
                        ***to see details follow this link {'>>>'}{' '}
                      </a>
                    </Link>
                  ) : null}
                </div>
                <div className="service__side">
                  <ul className="service-parts">
                    {parts.map((part, partIndex) => (
                      <li
                        className="service-parts__item"
                        key={'service' + index + 'part' + partIndex}
                      >
                        {part}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Fragment>
          ),
        )}
      </div>

      <SectionContactUs
        className="page-portfolio__contact-us page-box"
        cta="?cta=drop_us_services&page=services"
      >
        <h2 className="page-box__title">
          HOW COME YOUR IDEA DOESN’T HAVE AN ONLINE PRESENCE YET?
          <br />
          <br />
          <div className="highlight">LET’S MAKE A CHANGE.</div>
        </h2>
      </SectionContactUs>
    </div>
  </div>
)

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

export default Services
