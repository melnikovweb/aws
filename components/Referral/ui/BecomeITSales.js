import Section from 'components/Section'
import LinksBox from 'components/Referral/ui/LinksBox'

const BecomeITSales = props => {
  const links = [
    <>
      <b>Money Compensation</b>: Money Transfer, Crypto, e-Money
    </>,
    'Discount for Binerals services currently used by you',
    'Our software development services equivalent to the received bonus',
  ]
  return (
    <Section
      className="page-box__center-style"
      title={'Become our IT sales rep'}
      description2={
        'Our Representative promotes our services and refer new customers for % from the deal (Revenue Share basis). All Sales reps get access to all required promo materials and to comprehensive support by our IT experts. We select one exclusive sales rep for each economic region: EMEA, EUROPE, ASIA, OCEANIA, AFRICA, MIDDLE EAST, CIS '
      }
    >
      <LinksBox
        title={'HOW TO WITHDRAW REFERRAL BONUSES? WE OFFER 3 GENERAL OPTIONS: '}
        links={links}
      />
    </Section>
  )
}

export default BecomeITSales
