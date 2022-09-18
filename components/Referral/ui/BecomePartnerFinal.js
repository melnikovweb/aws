import Section from 'components/Section'
import Link from 'next/link'
import DoneIcon from 'components/Icons/Done'

const BecomePartnerFinal = props => {
  return (
    <Section
      className="page-box__center-style"
      title={'LET’S EARN MONEY TOGETHER'}
      description2={
        "Participation in Binerals' Referral Program is confidential. Terms outlined in the Referral Agreement and ensured by the NDA."
      }
    >
      <div className="congratulations-box">
        <div className="congratulations-box__title">Congratulations! </div>
        <div className="congratulations-box__description">
          Your registration was successful! We will contact you as soon as
          possible.
        </div>
        <DoneIcon />
      </div>
      <Link href="/">
        <a className="button button--big button--orange congratulations-box__button">
          Download Presentation
        </a>
      </Link>
      <Link href="/">
        <a className="link congratulations-box__privacy">Privacy Policy</a>
      </Link>
    </Section>
  )
}

export default BecomePartnerFinal
