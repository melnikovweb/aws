import React from 'react'
import Section from 'components/Section'
import LinksBox from 'components/Referral/ui/LinksBox'

const BecomeAffiliate = props => {
  const links = [
    <React.Fragment>
      <b>Money Compensation</b>: Money Transfer, Crypto, e-Money
    </React.Fragment>,
    'Discount for Binerals services currently used by you',
    'Our software development services equivalent to the received bonus',
  ]

  return (
    <Section
      className="page-box__center-style"
      title={'Become our affiliate'}
      description2={
        'You can promote our services and refer new customers for % from the deal (Revenue Share basis). All required promo materials, comprehensive guides, and dedicated support will be available at your disposal.'
      }
    >
      <LinksBox
        title={
          <React.Fragment>
            HOW TO WITHDRAW REFERRAL BONUSES? WE OFFER <b>3 GENERAL OPTIONS:</b>
          </React.Fragment>
        }
        links={links}
      />
    </Section>
  )
}

export default BecomeAffiliate
