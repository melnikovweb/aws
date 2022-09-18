import { useRouter } from 'next/router'
import classnames from 'classnames'

import BannerPromo from 'components/BannerPromo'
import RequestExperts from 'components/RequestExperts'

import WhatYouGet from 'components/WhatYouGet'
import WhatYouGetItem from 'components/WhatYouGet/WhatYouGetItem'

import Workflow from './Workflow'

const ProcessStep2 = ({ className, data }) => {
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
          goToContact('?cta=start_your_project&page=process_design')
        }
      >
        Have an Idea? <strong>We Can Help!</strong>
      </BannerPromo>
      <RequestExperts
        items={data.experts}
        title={
          'Hire Binerals’s designers who are ready to share their creativity for the benefit of your product'
        }
        hasAction
        actionText={'Request Design experts'}
        handleAction={() =>
          goToContact('?cta=req_design_experts&page=process_design')
        }
      />
      <Workflow
        title={'Workflow'}
        subTitle={
          'A solid Design strategy ensures that the business vision, user needs, and technical capabilities are aligned.'
        }
        items={data.workflow}
        rowItemsCount={5}
      />
      <WhatYouGet className="page-process__what-you-get" title={'What you get'}>
        <WhatYouGetItem title={'Wireframe'}>
          The skeletal framework of a site or app used to:
          <ul className="what-you-get-item-description__ul">
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-blue">
              visualize user navigation
            </li>
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-blue">
              demonstrate what interface elements will exist
            </li>
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-blue">
              and how they will be arranged.
            </li>
          </ul>
        </WhatYouGetItem>
        <WhatYouGetItem title={'Design'}>
          Static, aesthetical, visual representations of the Wireframe. This is
          how your project will look like for the end-user.
        </WhatYouGetItem>
        <WhatYouGetItem title={'Prototypes'}>
          Prototypes are generally used to:
          <ul className="what-you-get-item-description__ul">
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-blue">
              validate requirements
            </li>
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-blue">
              provide specifications for a real, working system
            </li>
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-blue">
              evaluate design
            </li>
            <li className="what-you-get-item-description-li what-you-get-item-description-li--marker-blue">
              enhance precision by system analysts and users.
            </li>
          </ul>
        </WhatYouGetItem>
        <WhatYouGetItem title={'Design Kit'}>
          Design kit is a library of UI elements - a collection of graphic files
          and resources to underpin your site or app’s layout. <br />
          UI kits typically include the user interface components that convey
          meaning and provide the functionality to users – think buttons,
          widgets, checkboxes, progress bars, and navigation buttons.
        </WhatYouGetItem>
      </WhatYouGet>
      <BannerPromo
        hasLogo
        hasAction
        isMedium
        actionText={'Request Specialist'}
        handleAction={() => goToContact('?cta=req_spec&page=process_design')}
      >
        Our <strong>Design Experts</strong> have a wide range of skills. Take a
        look at some CVs and book an interview with your preferred candidate.
      </BannerPromo>
    </div>
  )
}

export default ProcessStep2
