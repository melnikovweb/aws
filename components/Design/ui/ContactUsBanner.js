import classnames from 'classnames'
import Link from 'next/link'

import Letter from 'components/Icons/LetterDesign'
import Logo from './LogoContacts'

const ContactUsBanner = ({ className, brandInfo }) => {
  return (
    <div className={classnames(className, 'contacts-banner')}>
      <Logo className="contacts-banner-logo" />
      <div className="contacts-banner-address">
        Bulgaria, Town of Sofia 1404, district of Sofia (capital) Stolichna
        municipality, Triaditsa region Manastirski livadi Housing Estate, bl.
        30, entr. A, ap. 4
      </div>
      <Link href={`tel:${brandInfo.companyPhone}`}>
        <a className="contacts-banner-link">
          <span className="contacts-banner-link__text contacts-banner-phone-text">
            {brandInfo.companyPhone}
          </span>
        </a>
      </Link>
      <Link href={`mailto:${brandInfo.companyEmail}`}>
        <a className="contacts-banner-link">
          <Letter className="contacts-banner-link__icon" />
          <span className="contacts-banner-link__text">
            {brandInfo.companyEmail}
          </span>
        </a>
      </Link>
      <Link href={brandInfo.companyUrl}>
        <a className="contacts-banner-link__site">Corporate Site</a>
      </Link>
    </div>
  )
}
export default ContactUsBanner
