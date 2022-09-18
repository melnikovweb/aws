import { useRouter } from 'next/router'
import classnames from 'classnames'

import BannerPromo from 'components/BannerPromo'
import RequestExperts from 'components/RequestExperts'

import WhatYouGet from 'components/WhatYouGet'
import WhatYouGetItem from 'components/WhatYouGet/WhatYouGetItem'

import Workflow from './Workflow'

const ProcessStep3 = ({ className, data }) => {
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
          goToContact('?cta=start_your_project&page=process_management')
        }
      >
        Have an Idea? <strong>We Can Help!</strong>
      </BannerPromo>
      <RequestExperts
        items={data.experts}
        title={'Hire our development teams who will code anything for you.'}
        hasAction
        actionText={'Request Engineers'}
        handleAction={() =>
          goToContact('?cta=req_engineers&page=process_management')
        }
        className="page-process__request-experts"
      />
      <Workflow
        title={'Workflow'}
        subTitle={
          'When digging more in-depth, software product development is an exceptionally organized process with precise procedures and strictly defined steps known as the Software Development Life Cycle (SDLC). Whenever you need a sophisticated system, software suite, or end-user web or mobile app, your outstanding project delivery, besides all the other essential factors, largely depends on a set of processes practiced by the development team.'
        }
        items={data.workflow}
        rowItemsCount={4}
      />
      <WhatYouGet className="page-process__what-you-get" title={'What you get'}>
        <WhatYouGetItem
          title={'Development'}
          additional={
            'Pull Request Analysis with SonarQube, Code cross review by developers'
          }
        >
          <ul className="what-you-get-item-description__ul">
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-big what-you-get-item-description-li--marker-red">
              Code is <strong>100% valid</strong>
            </li>
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-big  what-you-get-item-description-li--marker-blue">
              <strong>Code quality</strong> is under full control
            </li>
          </ul>
        </WhatYouGetItem>
        <WhatYouGetItem
          title={'Testing'}
          additional={'Functionality, UX, Performance, and Security testing'}
        >
          <ul className="what-you-get-item-description__ul">
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-big what-you-get-item-description-li--marker-red">
              <strong>100% of functionality</strong> covered with manual tests
            </li>
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-big  what-you-get-item-description-li--marker-blue">
              Up to <strong>70% of code</strong> coverage with test automation
            </li>
          </ul>
        </WhatYouGetItem>
        <WhatYouGetItem
          title={'Deployment'}
          additional={
            'Autodeploy, E2E autotests, daily search for syntax and logical errors'
          }
        >
          <ul className="what-you-get-item-description__ul">
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-big what-you-get-item-description-li--marker-red">
              <strong>10X lower</strong> failure rates
            </li>
          </ul>
        </WhatYouGetItem>
        <WhatYouGetItem
          title={'Maintenance'}
          additional={
            'Autodeploy, E2E autotests, daily search for syntax and logical errors'
          }
        >
          <ul className="what-you-get-item-description__ul">
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-big what-you-get-item-description-li--marker-red">
              <strong>10X lower</strong> failure rates
            </li>
          </ul>
        </WhatYouGetItem>
      </WhatYouGet>
      <BannerPromo
        hasLogo
        hasAction
        isMedium
        actionText={'Request a FREE QUOTE'}
        handleAction={() =>
          goToContact('?cta=req_free_quote&page=process_management')
        }
      >
        Looking for Self-Managed Teams? <br />
        <strong>We can Help!</strong>
      </BannerPromo>
    </div>
  )
}

export default ProcessStep3
