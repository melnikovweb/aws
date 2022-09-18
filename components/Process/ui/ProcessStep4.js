import { useRouter } from 'next/router'
import classnames from 'classnames'

import WhatYouGet from 'components/WhatYouGet'
import WhatYouGetItem from 'components/WhatYouGet/WhatYouGetItem'

import BannerPromo from 'components/BannerPromo'
import RequestExperts from 'components/RequestExperts'

import Workflow from './Workflow'

const ProcessStep4 = ({ className, data }) => {
  const router = useRouter()

  const goToContact = cta => {
    router.push('/contact' + cta).then(() => window.scrollTo(0, 0))
  }

  return (
    <div className={classnames([className, 'process-content'])}>
      <BannerPromo
        className="page-process__promo"
        hasLogo
        hasAction
        isMedium
        actionText={'Request Marketing Roadmap'}
        handleAction={() =>
          goToContact('?cta=req_marketing_roadmap&page=process_growth')
        }
      >
        Have an app or site? <strong>We Can Boost it!</strong>
      </BannerPromo>
      <RequestExperts
        items={data.experts}
        title={'We can help to grow your startup or existing business.'}
        hasAction
        actionText={'Request Marketing Managers'}
        handleAction={() =>
          goToContact('?cta=req_marketing_managers&page=process_growth')
        }
        className="page-process__request-experts"
      />
      <Workflow
        title={'Workflow'}
        subTitle={
          'Our Affiliate Managers, Media Buyers, and Listing Experts (SEO, ASO, SMO) will run marketing campaigns for you on all existing platforms, including Google,  Apple Store, Amazon, Facebook, and others.'
        }
        items={data.workflow}
        rowItemsCount={4}
        isFinishHighlighted
      />
      <WhatYouGet className="page-process__what-you-get" title={'What you get'}>
        <WhatYouGetItem
          title={'Marketing Strategy'}
          additional={
            'List of marketplaces and planned actions to achieve a sustainable competitive advantage and business growth'
          }
        >
          <ul>
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-blue">
              <strong>100% of user segments and growth channels</strong> covered
            </li>
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-blue">
              <strong>Marketing Roadmap</strong> with checkpoints and
              requirements
            </li>
          </ul>
        </WhatYouGetItem>
        <WhatYouGetItem
          title={'Optimized Listing'}
          additional={
            'SEO, ASO, SMO implementation. Indexation on target platforms for every relevant keyword. Converting Images and Call-2-Actions'
          }
        >
          <ul className="what-you-get-item-description__ul">
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-big what-you-get-item-description-li--marker-red">
              <strong>100% indexation</strong> for core keywords and visibility
              in search
            </li>
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-big  what-you-get-item-description-li--marker-blue">
              Up to <strong>70% better CTR</strong>
            </li>
          </ul>
        </WhatYouGetItem>
        <WhatYouGetItem
          title={'Traffic'}
          additional={
            'Exposure, Leads, Sales, Return Customers & Revenue Growth'
          }
        >
          <ul className="what-you-get-item-description__ul">
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-big what-you-get-item-description-li--marker-red">
              Ad campaigns with Pre-Landers and banners
            </li>
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-big  what-you-get-item-description-li--marker-blue">
              Dedicated Online marketing managers
            </li>
          </ul>
        </WhatYouGetItem>
        <WhatYouGetItem
          title={'Analytics'}
          additional={
            'Customer Lifecycle, Shopping activity, Engagement, ARPU groups, Loyalty Customer segments, Ideal Customer profile, Lapse point, CBs, Cohorts and Pivot tables, ROI calculation.'
          }
        >
          <ul className="what-you-get-item-description__ul">
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-big what-you-get-item-description-li--marker-red">
              <strong>100% understanding</strong> of your own business potential
            </li>
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-big  what-you-get-item-description-li--marker-blue">
              Product structure is defined
            </li>
          </ul>
        </WhatYouGetItem>
      </WhatYouGet>
      <BannerPromo
        hasLogo
        hasAction
        isMedium
        actionText={'Hire our Marketers'}
        handleAction={() =>
          goToContact('?cta=hire_marketers&page=process_growth')
        }
      >
        Looking for an online marketing agency? <br />
        <strong>
          We can help you with SEO, ASO, SMO, Leadgen, App install campaigns and
          Media buys.
        </strong>
      </BannerPromo>
    </div>
  )
}

export default ProcessStep4
