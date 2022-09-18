import Head from 'components/head'
import ContactForm from 'components/ContactUs/ui/Form'
import ContactBanner from 'components/ContactUs/ui/Banner'

import PageTitle from 'components/PageTitle'
import BannerPromo from 'components/BannerPromo'

import list from 'datastore/Company_FactList'

const Company = ({ metaData, externalTracks, brandInfo }) => {
  return (
    <div className="page page-company">
      <Head
        {...metaData}
        brandInfo={brandInfo}
        externalTracks={externalTracks}
      />
      <div className="page__header container">
        <PageTitle className="page__title">
          <h1>Binerals is a trusted IT company in Ukraine.</h1>
        </PageTitle>
        <h3 className="page-company__subtitle">
          We are a Full-cycle custom software development company with deep
          expertise in mobile application development for a wide range of
          industries.
        </h3>
      </div>
      <div className="page__content">
        <div className="page-content container">
          <p className="page-content__item">
            We strive to create a company of highly experienced professionals
            having the best quality/price ratio within our segment. Here you can
            hire Software developers who have worked across a wide range of
            industries and have delivered over 100 projects. Our Enterprise
            background and Unique Development Methodology helps to understand
            the goals of every project. We care about the products we are
            building and believe that knowledge and expertise is our most
            important advantage. Motivation and loyalty is an essential part of
            our organization. We are a community, not just an office.
          </p>
          <p className="page-content__item">
            Binerals is a team of technical gurus, quality assurance experts and
            managers with rich experience and knowledge to meet any challenge
            and demand on IT market. 80% of our employees are expert-level pros.
            Our team’s Knowledge of Business Management helps to overcome common
            difficulties in outsourcing. We have the flexibility to help our
            customers both launch short-term small or medium projects and build
            long-term partnerships that would strengthen our partners’ in-house
            teams and change the vision of an offshore team from mere
            contractors to an important part of the organization with the
            corresponding motivation and loyalty.
          </p>
        </div>
        <BannerPromo
          className="page-company__promo"
          hasLogo
          isLarge
          isTextLarge
          isWide
        >
          Our team of experienced data engineers and business-savvy data
          scientists is what really makes us <strong>stand out</strong>
        </BannerPromo>
        <div className="container cover-section">
          <div className="company-facts">
            <div className="company-facts-header">
              <h2 className="page-box__title divider divider--bottom divider--center">
                Quick Facts
              </h2>
              <p className="company-facts-header__description">
                Our team is an accomplished coalition of information technology
                experts, QA specialists and progressive business strategists.
              </p>
            </div>
            <div className="company-facts__contents">
              <div className="company-facts__list">
                {list.map(({ Icon, description }, index) => (
                  <div
                    className="company-facts__item"
                    key={'company-facts' + index}
                  >
                    <div className="company-facts">
                      <div className="company-facts__icon">
                        <Icon width={62} height={62} />
                      </div>
                      <p className="company-facts__description">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="page-company__contact container">
          <h2 className="page-company__contact__title">LET’S KEEP IN TOUCH!</h2>
          <ContactBanner />
          <ContactForm company_cta="company_page_form" />
        </div>
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

export default Company
