import PageTitle from 'components/PageTitle'
import Head from 'components/head'
import Section from 'components/Section'
import SubNav from 'components/SubNav'

import PlanFact from 'components/Icons/PlanFact'
import ProductAdaptation from 'components/Icons/ProductAdaptation'
import Commitment from 'components/Icons/Commitment'
import Price from 'components/Icons/Price'
import Magnifier from 'components/Icons/Magnifier'
import Budget from 'components/Icons/Budget'
import Web from 'components/Icons/Web'
import Duration from 'components/Icons/Duration'

import CalculateResultForm from 'components/ManagedServices/ui/CalculateResultForm'
import CalculationForm from 'components/ManagedServices/ui/CalculationForm'
import EstimateSpecForm from 'components/ManagedServices/ui/EstimateSpecForm'

import Tabs from 'components/Tabs/Tabs'

import SectionReviews from 'components/Reviews/Reviews'
import SectionClients from 'components/Clients'
import WorkflowItem from 'components/Process/ui/Workflow'

import ContactUsBanner from 'components/ContactUs/ui/Banner'
import ContactUsForm from 'components/ContactUs/ui/Form'

import subNavList from 'datastore/Other_subNavList'
import WorkflowList from 'datastore/ManagedServices_WorkflowList'
import howItWorksItems from 'datastore/ManagedServices_HowItWorksList'
import CalculateResultData from 'datastore/ManagedServices_CalculateResultData' //for test

const ManagedServices = ({ metaData, brandInfo, externalTracks }) => (
  <div className="page page-managed-services">
    <Head
      {...metaData}
      brandInfo={brandInfo}
      externalTracks={externalTracks}
      noindex
    />
    <SubNav className="page-managed-services__nav" list={subNavList} isSticky />

    <div className="page__header container">
      <PageTitle className="page__title">
        <h1>
          "Everything Begins With An Idea."
          <span>– Earl Nightengale</span>
        </h1>
      </PageTitle>
      <button className="page__button button button--big">
        Tell us about your idea
      </button>
    </div>
    <div className="page__content container">
      <div className="calculate-result-form-wrapper">
        <CalculateResultForm data={CalculateResultData} />
      </div>

      <Section
        className="page-managed-services-calculate"
        title="Project Calculator"
        description="Looking for developers and want to know how much it will cost for you? Fill in the form below to get your project estimation and check programmers CVs. Let us help you with your IT needs."
        coverSection={true}
      >
        <CalculationForm />
      </Section>
      <Section
        className="page-managed-services-estimate"
        title="Estimate the specification"
        description="Please send us your docs, and our experts will evaluate your project in the shortest terms and with the maximum precision."
      >
        <EstimateSpecForm />
      </Section>

      <Section
        className="page-managed-services-features"
        title="We know how to Deliver reliable IT Projects on Time and Budget"
        description="Our Team of experts guarantee to deliver a reliable and well-managed solution on time and within your budget, leaving you more time to do what you do best – grow your business."
        coverSection={true}
      >
        <h3 className="page-managed-services-subtitle">Features</h3>
        <ul className="page-managed-services-list">
          <li className="page-managed-services-list-item">
            <PlanFact className="page-managed-services-list-icon" />
            <div className="page-managed-services-list-body">
              Projects launched within two weeks of application
            </div>
          </li>
          <li className="page-managed-services-list-item">
            <ProductAdaptation className="page-managed-services-list-icon" />
            <div className="page-managed-services-list-body">
              6-month warranty and technical support fro critical bugs
            </div>
          </li>
          <li className="page-managed-services-list-item">
            <Commitment className="page-managed-services-list-icon" />
            <div className="page-managed-services-list-body">
              Personal Commitment to your project
            </div>
          </li>
          <li className="page-managed-services-list-item">
            <Price className="page-managed-services-list-icon" fill="#0069FF" />
            <div className="page-managed-services-list-body">
              Cost-effective price for an enterprise-level devs
            </div>
          </li>
        </ul>
      </Section>
      <Section
        className="page-managed-services-assurance"
        title="What you get"
        description="Cutting-edge software developed by industry experts with a deep understanding of how internet companies make money."
      >
        <ul className="page-managed-services-list list-cover">
          <li className="page-managed-services-list-item">
            <div className="page-managed-services-list-icon">
              <Magnifier fill="#0069FF" width="60" height="60" />
            </div>
            <div className="page-managed-services-list-body">
              <div className="page-managed-services-list-title">
                Defined timeline and goals
              </div>
              The first step we take is to define the scope of work and
              efficiently allocate the right resources for the task. We provide
              time estimation and suggested project roadmap.
            </div>
          </li>
          <li className="page-managed-services-list-item">
            <div className="page-managed-services-list-icon">
              <Budget width="60" height="60" />
            </div>
            <div className="page-managed-services-list-body">
              <div className="page-managed-services-list-title">
                Budget transparency
              </div>
              During the development process, we provide detailed plans and
              reports every month to transparently demonstrate how we spend the
              budget.
            </div>
          </li>
          <li className="page-managed-services-list-item">
            <div className="page-managed-services-list-icon">
              <ProductAdaptation width="60" height="60" />
            </div>
            <div className="page-managed-services-list-body">
              <div className="page-managed-services-list-title">
                Guaranteed quality
              </div>
              We provide QA and technical support to keep your project running
              smoothly, making your customers happy.
            </div>
          </li>
          <li className="page-managed-services-list-item">
            <div className="page-managed-services-list-icon">
              <Web fill="#0069FF" width="60" height="60" />
            </div>
            <div className="page-managed-services-list-body">
              <div className="page-managed-services-list-title">
                Defined timeline and goals
              </div>
              The first step we take is to define the scope of work and
              efficiently allocate the right resources for the task. We provide
              time estimation and suggested project roadmap.
            </div>
          </li>
          <li className="page-managed-services-list-item">
            <div className="page-managed-services-list-icon">
              <Duration width="60" height="60" />
            </div>
            <div className="page-managed-services-list-body">
              <div className="page-managed-services-list-title">
                On-time Deliveries
              </div>
              Our Delivery managers ensure that our Engineers will meet agreed
              deadlines for each iteration.
            </div>
          </li>
          <li className="page-managed-services-list-item">
            <div className="page-managed-services-list-icon">
              <PlanFact width="60" height="60" />
            </div>
            <div className="page-managed-services-list-body">
              <div className="page-managed-services-list-title">
                Scalable solution
              </div>
              Our system architects make sure you get a flexible, scalable
              solution so you could extend your project at any time.
            </div>
          </li>
        </ul>
      </Section>
      <Section
        className="page-managed-services__how-it-work"
        title="How it works"
      >
        <Tabs
          list={howItWorksItems}
          controlButtons={false}
          className="how-it-works-tabs"
        />
      </Section>
      <Section
        className="page-managed-services__workflow"
        title={'Workflow'}
        description={
          'Our industry expertise empowers simple development workflow with strict adherence to procedures on autopilot, making it a strong combination that led many customers to a successful launch in a short period.'
        }
      >
        <WorkflowItem items={WorkflowList} rowItemsCount={4} />
      </Section>

      <Section
        className="page-managed-services-references"
        title="References"
        description="Check out what our customers have to say!"
      ></Section>
    </div>

    <SectionReviews className="section-box container-fluid" />

    <div className="page__content container">
      <Section
        className="page-managed-services-benefits"
        title="Additional benefits"
        coverSection={true}
      >
        <ul className="page-managed-services-list list-col-3">
          <li className="page-managed-services-list-item">
            <div className="page-managed-services-list-body">
              <div className="page-managed-services-list-title">
                Reduce risk
              </div>
              By implementing the managed project approach, our team continually
              evaluates the progress of the project and how it fits your
              business strategy.
            </div>
          </li>
          <li className="page-managed-services-list-item">
            <div className="page-managed-services-list-body">
              <div className="page-managed-services-list-title">
                Improve business knowledge retention
              </div>
              The managed project approach reduces the risks of losing knowledge
              when employees are leaving.
            </div>
          </li>
          <li className="page-managed-services-list-item">
            <div className="page-managed-services-list-body">
              <div className="page-managed-services-list-title">
                Quickly implement new technologies
              </div>
              For over the last 12 years, we have been developing various IT
              solutions that save our clients time and money.
            </div>
          </li>
        </ul>
      </Section>
      <SectionClients className="page-managed-services-clients" />
    </div>

    <div className="container-fluid">
      <div className="contact-us-box">
        <div className="page-managed-services__contact-us page-box  container">
          <h2 className="page-box__title">LET’S KEEP IN TOUCH!</h2>
          <ContactUsBanner />
          <ContactUsForm />
        </div>
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
export default ManagedServices
