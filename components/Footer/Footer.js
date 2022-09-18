import { useState } from 'react'
import classnames from 'classnames'
import Link from 'next/link'

import ContactForm from './ui/Form'
import PopupThankYou from 'components/Popup/ContactThankYou'
import Tags from 'components/Tags'
import Logo from 'components/Logo'
import PaperPlane from 'components/Icons/PaperPlane'
import PhoneIcon from 'components/Icons/Phone'
import PeopleIcon from 'components/Icons/People'

import footerData from 'datastore/FooterData'

const Footer = ({ className }) => {
  const [isShowPopup, useIsShowPopup] = useState(false)
  return (
    <footer className={classnames([className, 'footer'])}>
      <PopupThankYou
        isShown={isShowPopup}
        onClose={() => {
          useIsShowPopup(false)
        }}
      />
      <div className="footer__content container">
        <div className="footer__main">
          {footerData.sections
            ? footerData.sections.map(({ links }, i) => (
                <div
                  key={`footer-section-${i}`}
                  className="footer__main-section footer-section-service"
                >
                  {links
                    ? links.map(({ title, link, items }, j) => (
                        <div
                          className="footer__main-section-sub"
                          key={`footer-section-${i}-${j}`}
                        >
                          <h4 className="footer__main-section-title">
                            {link ? (
                              <Link href={link}>
                                <a className="footer__main-section-title-link">
                                  {title}
                                </a>
                              </Link>
                            ) : (
                              title
                            )}
                          </h4>
                          {items ? (
                            <ul className="simple-list">
                              {items.map(({ title, link }, i) => (
                                <li
                                  className="simple-list__item"
                                  key={`simple-list-item-${i}`}
                                >
                                  <Link href={link}>
                                    <a className="simple-list__link">{title}</a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      ))
                    : null}
                </div>
              ))
            : null}

          <div
            className="footer__main-section  footer-section-contact"
            itemType="http://schema.org/Organization"
          >
            <h4 className="footer__main-section-title">Headquarters</h4>
            <div className="footer__main-section-content">
              <div className="footer-section-contact__box">
                <PaperPlane width="17" height="18" className="contact--icon" />
                <p
                  itemProp="address"
                  itemScope=""
                  itemType="http://schema.org/PostalAddress"
                >
                  Bulgaria, Town of Sofia 1404, district of Sofia (capital)
                  Stolichna municipality, Triaditsa region Manastirski livadi
                  Housing Estate, bl. 30, entr. A, ap. 4
                </p>
              </div>
              <div className="footer-section-contact__box">
                <PhoneIcon width="17" height="18" className="contact--icon" />
                <a
                  className="contact--phone"
                  href="tel:+380509672988"
                  itemProp="telephone"
                >
                  +380509672988
                </a>
              </div>
              <div className="footer-section-contact__box">
                <Tags list={footerData.tagsList} />
              </div>
              <div className="footer-section-contact__box">
                <PeopleIcon width="17" height="18" className="contact--icon" />
                <span>Contact with us</span>
              </div>
              <div className="footer-section-contact__box">
                <ContactForm sendHandler={() => useIsShowPopup(true)} />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__sideL">
            <Logo className="footer__logo" />
            <p className="footer__copy">
              &copy; Binerals - {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
          <div className="footer__sideC"></div>
          <div className="footer__sideR">
            {!!footerData.socialLinks ? (
              <ul className="footer__social">
                {footerData.socialLinks.map(({ Icon, link, name }, i) => (
                  <li className="footer__social-item" key={`social-item-${i}`}>
                    <a
                      href={link}
                      alt={name}
                      className="footer__social-link"
                      target="_blank"
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}

            <ul className="footer__links">
              <li className="footer__links-item">
                <Link href="/privacy-policy">
                  <a className="footer__links-link">Privacy Policy</a>
                </Link>
              </li>
              <li className="footer__links-item">
                <Link href="/cookies-policy">
                  <a className="footer__links-link">Cookies Policy</a>
                </Link>
              </li>
              <li className="footer__links-item">
                <Link href="/terms-and-conditions">
                  <a className="footer__links-link">Terms & Conditions</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
