import { useRouter } from 'next/router'
import classnames from 'classnames'

import WhatYouGet from 'components/WhatYouGet'
import WhatYouGetItem from 'components/WhatYouGet/WhatYouGetItem'

import BannerPromo from 'components/BannerPromo'
import RequestExperts from 'components/RequestExperts'
import PlanFactIcon from 'components/Icons/PlanFact'
import DocumentationIcon from 'components/Icons/Documentation'
import GraphicsIcon from 'components/Icons/Graphics'
import WindowCheckedIcon from 'components/Icons/WindowChecked'

import Workflow from './Workflow'

import documentSpecsList from 'datastore/Process_DocumentSpecsList'

const ProcessStep1 = ({ className, data }) => {
  const router = useRouter()

  const goToContact = cta => {
    router.push('/contact' + cta).then(() => window.scrollTo(0, 0))
  }

  return (
    <div className={classnames([className])}>
      <BannerPromo
        className="page-process__promo"
        hasLogo
        hasAction
        isMedium
        isTextMedium
        actionText={'Start Your Project'}
        handleAction={() =>
          goToContact('?cta=start_your_project&page=process_idea')
        }
      >
        Have an Idea? <strong>We Can Help!</strong>
      </BannerPromo>
      <RequestExperts
        items={data.experts}
        title={'Add a Business Analyst to your project to:'}
        hasAction
        actionText={'Request BA Specialists'}
        handleAction={() => goToContact('?cta=req_ba_spec&page=process_idea')}
      />
      <Workflow
        title={'Workflow'}
        subTitle={
          'Our industry expertise empowers simple development workflow with strict adherence to procedures on autopilot, making it a strong combination that led many customers to a successful launch in a short period.'
        }
        items={data.workflow}
        rowItemsCount={5}
      />
      <WhatYouGet
        className="page-process__what-you-get"
        title={'What you get'}
        subTitle={
          'Professionally written document specs for your project that meet industry standards.'
        }
        hasSpoiler
        spoilerTitle={'Document Specs List'}
        spoilerList={documentSpecsList}
      >
        <WhatYouGetItem
          title={'Vision and\n' + 'scope document'}
          Icon={PlanFactIcon}
        >
          The vision and scope is the guidance for all software projects. It's a
          high-level document that should get all the stakeholders in the
          project on the same page. It describes the overall 'vision', or plan.
          It is more brief and general than a product requirements document
        </WhatYouGetItem>
        <WhatYouGetItem
          title={'Requirement\n' + 'Specification'}
          Icon={DocumentationIcon}
        >
          A software requirements specification (SRS) is a complete description
          of a software system with its functional and non-functional
          requirements. It may comprise a set of use cases that define user
          interactions that the software must provide to the end-user for the
          ideal business.
        </WhatYouGetItem>
        <WhatYouGetItem title={'Diagrams'} Icon={GraphicsIcon}>
          Visualization helps to identify problem areas and show the scale of
          the project from the bird’s-eye view:
          <ul className="what-you-get-item-description__ul">
            <li className="what-you-get-item-description-li">
              Business Model Canvas
            </li>
            <li className="what-you-get-item-description-li">
              Entity Relationship Diagrams (ERD)
            </li>
          </ul>
        </WhatYouGetItem>
        <WhatYouGetItem title={'Cost Estimation'} Icon={WindowCheckedIcon}>
          Approximation of the cost and other resources needed to complete a
          project based on SRS. Cost estimation has a single total value and for
          each element required for the project.
        </WhatYouGetItem>
      </WhatYouGet>
      <BannerPromo
        hasLogo
        hasAction
        isMedium
        actionText={'Request Specialist'}
        handleAction={() => goToContact('?cta=req_spec&page=process_idea')}
      >
        Our <strong>Business Analysts</strong> have a wide range of skills. Take
        a look at some CVs and book an interview with your preferred candidate.
      </BannerPromo>
    </div>
  )
}

export default ProcessStep1
