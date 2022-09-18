import PageTitle from 'components/PageTitle'
import Head from 'components/head'
import ContactForm from 'components/ContactUs/ui/Form'
import ContactBanner from 'components/ContactUs/ui/Banner'
import SubNav from 'components/SubNav'
import Graphics from 'components/Icons/Graphics'
import Localization from 'components/Icons/Localization'
import ProductAdaptation from 'components/Icons/ProductAdaptation'
import Mids from 'components/Icons/Mids'
import CodeIcon from 'components/Icons/Code'
import IntegrationIcon from 'components/Icons/Integration'
import ReportingIcon from 'components/Icons/Reporting'
import DocumentationIcon from 'components/Icons/Documentation'
import PrototypesIcon from 'components/Icons/Prototypes'
import BusinessPeocessIcon from 'components/Icons/BusinessPeocess'

import subNavList from 'datastore/Other_subNavList'

const OtherServices = ({ metaData, brandInfo, externalTracks }) => (
  <div className="page page-other container">
    <Head
      {...metaData}
      brandInfo={brandInfo}
      externalTracks={externalTracks}
      noindex
    />
    <SubNav className="page-other__nav" list={subNavList} isSticky />
    <div className="page__header">
      <PageTitle className="page__title">
        <h1>
          Quality is never an accident. It is always the result of intelligent
          effort.
        </h1>
      </PageTitle>
      <button className="button button--big hidden">Check your site</button>
    </div>
    <div className="page__content">
      <div className="page-content">
        <div className="page-other-wrapper-item highlight-wrapepr">
          <h2 className="page-other-title">IT products' integration</h2>
          <p className="page-other-description">
            Binerals provides comprehensive services to make your business
            comply with government, internet, appstore and payment regulations
            as well as local legislation. This might require some re-design or
            adding/removing some of features required by 3rd parties and
            regulators.
          </p>

          <h3 className="page-other-subtitle">We offer</h3>
          <ul className="other-service-offer-list">
            <li className="other-service-offer-list-item">
              <Graphics className="other-service-offer-list-icon" />

              <span className="other-service-offer-list-text">
                Market research & Analysis
              </span>
            </li>
            <li className="other-service-offer-list-item">
              <ProductAdaptation className="other-service-offer-list-icon" />

              <span className="other-service-offer-list-text">
                Product adaptation & Legal assistance
              </span>
            </li>
            <li className="other-service-offer-list-item">
              <Localization className="other-service-offer-list-icon" />

              <span className="other-service-offer-list-text">
                Localization, Modification & Redesign
              </span>
            </li>
            <li className="other-service-offer-list-item">
              <Mids className="other-service-offer-list-icon" />

              <span className="other-service-offer-list-text">
                MIDs and Payment aggregator consultancy
              </span>
            </li>
          </ul>
        </div>

        <div className="page-other-wrapper-item">
          <h2 className="page-other-title">Quality Assurance</h2>
          <p className="page-other-description">
            To ensure that software meets the highest standards and to deliver
            your product to customers without bugs we use full-spectrum of QA
            Assurance techniques and processes.
          </p>

          <ul className="other-service-testing-list">
            <li className="other-service-testing-list-wrapper">
              <div className="other-service-testing-list-item">
                <div className="other-service-testing-list-order">01</div>
                <div className="other-service-testing-list-content">
                  <div className="other-service-item-list-title">
                    Functional testing
                  </div>
                  <p className="page-other-description">
                    We continuously test if the software meets your specs
                  </p>
                </div>
              </div>
            </li>
            <li className="other-service-testing-list-wrapper">
              <div className="other-service-testing-list-item">
                <div className="other-service-testing-list-order">02</div>
                <div className="other-service-testing-list-content">
                  <div className="other-service-item-list-title">
                    Performance testing
                  </div>
                  <p className="page-other-description">
                    Our performance engineers always test if the system handle
                    expected loads
                  </p>
                </div>
              </div>
            </li>
            <li className="other-service-testing-list-wrapper">
              <div className="other-service-testing-list-item">
                <div className="other-service-testing-list-order">03</div>
                <div className="other-service-testing-list-content">
                  <div className="other-service-item-list-title">
                    Security testing
                  </div>
                  <p className="page-other-description">
                    Our IT specialists evaluate the project to ensure it is
                    secure from vulnerabilities
                  </p>
                </div>
              </div>
            </li>
            <li className="other-service-testing-list-wrapper">
              <div className="other-service-testing-list-item">
                <div className="other-service-testing-list-order">04</div>
                <div className="other-service-testing-list-content">
                  <div className="other-service-item-list-title">
                    Automation testing
                  </div>
                  <p className="page-other-description">
                    Our QA engineers design automated tests that run testing
                    functions with multiple scenarios, automatically saving your
                    time and money
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="page-other-wrapper-item highlight-wrapepr">
          <h2 className="page-other-title">DevOps Integration</h2>
          <p className="page-other-description">
            Our team of experts aims to shorten the development life cycle
            utilizing better communication and collaboration between development
            and IT operations.
          </p>

          <ul className="other-service-default-list">
            <li className="other-service-default-list-item">
              <CodeIcon className="other-service-default-list-icon" />
              <div className="other-service-item-list-title">Clean code</div>
              <p className="page-other-description">
                Our programmers offer clean, reliable code that contains minimal
                number of entities, is easy to read, with proper syntax and
                clear definitions.
              </p>
            </li>
            <li className="other-service-default-list-item">
              <IntegrationIcon className="other-service-default-list-icon" />
              <div className="other-service-item-list-title">
                Continuous delivery
              </div>
              <p className="page-other-description">
                We utilise automated and frequent unit testing to reduce risks
                and produce higher quality solutions.
              </p>
            </li>
            <li className="other-service-default-list-item">
              <ReportingIcon className="other-service-default-list-icon" />
              <div className="other-service-item-list-title">
                Monitoring and reporting
              </div>
              <p className="page-other-description">
                A single centralized reporting interface ensures the health of
                your application and gives access to information on our
                progress.
              </p>
            </li>
          </ul>
        </div>

        <div className="page-other-wrapper-item ">
          <h2 className="page-other-title">Security control</h2>
          <p className="page-other-description">
            We take all required measures to reduce information security risks
            to protect the availability, confidentiality, and integrity of data
            and networks. Products we deliver always conform to the highest
            standards.
          </p>

          <ul className="other-service-default-list">
            <li className="other-service-default-list-item">
              <div className="other-service-default-list-level">
                level{' '}
                <span className="other-service-default-list-number">01</span>
              </div>
              <div className="other-service-item-list-title">Consulting</div>
              <p className="page-other-description">
                Our security specialists can advise on faults in your company's
                IT system and find a better solution to prevent cyber attacks
                and theft.
              </p>
            </li>
            <li className="other-service-default-list-item">
              <div className="other-service-default-list-level">
                level{' '}
                <span className="other-service-default-list-number">02</span>
              </div>
              <div className="other-service-item-list-title">Maintenance</div>
              <p className="page-other-description">
                We shield your product from reverse engineering to protect your
                assets from unexpected losses.
              </p>
            </li>
            <li className="other-service-default-list-item">
              <div className="other-service-default-list-level">
                level{' '}
                <span className="other-service-default-list-number">03</span>
              </div>
              <div className="other-service-item-list-title">
                Vulnerability detection
              </div>
              <p className="page-other-description">
                We inspect the encryption of personal info, internet data flows,
                the state of local database and more.
              </p>
            </li>
          </ul>
        </div>

        <div className="page-other-wrapper-item highlight-wrapepr">
          <h2 className="page-other-title">Business analysis</h2>
          <p className="page-other-description">
            Our marketing experts and business analytics will work closely with
            you to determine your project’s unique requirements, improve
            processes, and guide your business towards practical solutions and
            new opportunities.
          </p>

          <ul className="other-service-default-list">
            <li className="other-service-default-list-item">
              <DocumentationIcon
                className="other-service-default-list-icon"
                fill="#0073e8"
              />
              <div className="other-service-item-list-title">
                Requirements documentation
              </div>
              <p className="page-other-description">
                We create a detailed description of functional and
                non-functional requirements and make sure everything is
                thoroughly identified, adequately documented, and agreed with
                you.
              </p>
            </li>
            <li className="other-service-default-list-item">
              <PrototypesIcon className="other-service-default-list-icon" />
              <div className="other-service-item-list-title">
                Wireframes & prototypes
              </div>
              <p className="page-other-description">
                These steps are necessary to visualise the project’s
                architecture, features, navigation and usability.
              </p>
            </li>
            <li className="other-service-default-list-item">
              <BusinessPeocessIcon className="other-service-default-list-icon" />
              <div className="other-service-item-list-title">
                Business process modelling
              </div>
              <p className="page-other-description">
                Our analysts implement BPM techniques to determine a company's
                business processes or workflows to identify possible weakness
                and potential improvements.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="page-company__contact">
        <h2 className="page-company__contact__title">LET’S KEEP IN TOUCH!</h2>
        <ContactBanner />
        <ContactForm />
      </div>
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
export default OtherServices
