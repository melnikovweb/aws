import { isMobile } from 'react-device-detect'
import SubNav from 'components/SubNav'
import PageTitle from 'components/PageTitle'
import Section from 'components/Section'
import Tabs from 'components/Tabs/Tabs'
import Expert from 'components/Expert'
import Head from 'components/head'

import SectionReviews from 'components/Reviews/Reviews'
import TeamsForm from 'components/Teams/ui/TeamsForm'
import SectionClients from 'components/Clients'

import ContactUsBanner from 'components/ContactUs/ui/Banner'
import ContactUsForm from 'components/ContactUs/ui/Form'
import WhatYouGetBlock from 'components/Teams/ui/WhatYouGetBlock'
import WorkflowItem from 'components/Process/ui/Workflow'
import SkypeIcon from 'components/Icons/SkypeMono'

import subNavList from 'datastore/Other_subNavList'
import howItWorksItems from 'datastore/Teams_HowItWorksList'
import AvailableExperts from 'datastore/Teams_AvailableExperts'
import WhatYouGetList from 'datastore/Teams_WhatYouGetList'
import WorkflowList from 'datastore/Teams_WorkflowList'

const Teams = ({ metaData, brandInfo, externalTracks }) => (
  <div className="page page-teams">
    <Head
      {...metaData}
      brandInfo={brandInfo}
      externalTracks={externalTracks}
      noindex
    />
    <SubNav className="page-teams__nav" list={subNavList} isSticky />

    <div className="page__header container">
      <PageTitle className="page__title">
        {!isMobile && <h1>Quickly scale your team</h1>}
        {isMobile && <h1>MObile: Quickly scale your team</h1>}
      </PageTitle>
      <h3 className="page__description">
        To make your business grow and reach greater heights
      </h3>
      <button className="page__button button button--big">
        Get a quote for your team
      </button>
    </div>
    <div className="page__content container">
      <Section
        className="page-teams__calculate"
        title="Add extra specialists to your project in-house team"
        description="Need find qualified and talented programmers that would strengthen your in-house teams? We can extend your staff and speed up the development process with a qualified and seasoned engineers. We hire and host the best developers and managers in the industry. They use innovations to build mobile apps and high load software for your business. We strive to change the vision of an offshore team from mere contractors to an important part of the organization with the corresponding motivation and loyalty."
        coverSection={true}
      >
        <TeamsForm />
      </Section>
      <Section
        className="page-teams__you-get"
        title="What you get"
        description="Our in-house engineers offer a wide range of technical skills that combine a strong technical back-end with easy-to-use modern design."
      >
        <div className="page-teams__you-get-items">
          {WhatYouGetList.map((item, i) => (
            <WhatYouGetBlock {...item} key={'you-get-block-' + i} />
          ))}
        </div>
      </Section>
      <Section className="page-teams__how-it-work" title="How it works">
        <Tabs
          list={howItWorksItems}
          controlButtons={false}
          className="how-it-works-tabs"
        />
      </Section>
      <Section
        className="page-teams__workflow"
        title={'Workflow'}
        description={
          'At Binerals, we know how to achieve optimal workflow for software development as a team. Over time we built up a process that has enabled us to achieve excellent results with less effort saving time for our clients.'
        }
      >
        <div className="remark">
          <div>
            <SkypeIcon />
          </div>
          <p>
            We guarantee that our IT engineers are on Skype from 9 a.m. till 6
            p.m. GMT+3 Check how fast they reply.
          </p>
        </div>
        <WorkflowItem
          items={WorkflowList}
          rowItemsCount={4}
          isFinishHighlighted
        />
      </Section>
      <Section
        description="Hire best engineers to boost your development process. Here are some of our best talents."
        className="page-teams__available-experts"
        title="Available experts"
        coverSection={true}
      >
        <div className="page-teams__experts-items">
          {AvailableExperts.map((expert, i) => (
            <Expert items={expert} key={'available-expert-' + i} />
          ))}
        </div>
      </Section>
      <Section
        className="page-teams-references"
        title="References"
        description="Check out what our customers have to say!"
      ></Section>
    </div>
    <SectionReviews className="section-box container-fluid" />
    <div className="page__content container">
      <SectionClients className="page-teams-clients" />
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

export default Teams
