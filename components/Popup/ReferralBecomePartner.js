import { useState } from 'react'
import classnames from 'classnames'
import Link from 'next/link'

import PopupLayout from 'layouts/PopupLayout'

import BecomeITSales from 'components/Referral/ui/BecomeITSales'
import BecomeReferralForm from 'components/Referral/ui/BecomeReferralForm'
import BecomePartnerFinal from 'components/Referral/ui/BecomePartnerFinal'

import Section from 'components/Section'

const Step1 = ({ goToNextStep }) => (
  <>
    <BecomeITSales />
    <div className="page-referral__buttons">
      <button
        className="button button--big"
        onClick={() => {
          goToNextStep()
        }}
      >
        Continue
      </button>
      <Link href="/">
        <a className="button button--orange button--big">
          Download Presentation
        </a>
      </Link>
    </div>
  </>
)

const Step2 = ({ goToNextStep }) => (
  <Section
    className="page-box__center-style"
    title={'LET’S EARN MONEY TOGETHER'}
    description2={
      "Participation in Binerals' Referral Program is confidential. Terms outlined in the Referral Agreement and ensured by the NDA."
    }
  >
    <BecomeReferralForm submitFormClickAction={goToNextStep} />
  </Section>
)

const ReferralBecomePartner = ({ className }) => {
  const [stateStep, setStateStep] = useState(1)

  const goToNextStep = number => {
    setStateStep(number)
  }

  const stepList = [Step1, Step2, BecomePartnerFinal]
  const Step = stepList[stateStep - 1]

  return (
    <div
      className={classnames([
        className,
        'popup-content',
        'popup-content--lightgrey',
      ])}
    >
      <Step
        goToNextStep={() => {
          goToNextStep(stateStep + 1)
        }}
      />
    </div>
  )
}

export default ({ isShown, onClose }) => (
  <PopupLayout isWide isVisible={isShown} closePopup={onClose}>
    <ReferralBecomePartner />
  </PopupLayout>
)
