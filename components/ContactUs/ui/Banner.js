import classnames from 'classnames'

import PhoneIcon from 'components/Icons/Phone'
import Shedule from 'components/Icons/Shedule'
import Letter from 'components/Icons/Letter'
import PaperPlane from 'components/Icons/PaperPlane'

// TODO - update this component to new design
const Banner = ({ className }) => (
  <div className={classnames(className, 'contact-banner')}>
    <div className="contact-banner__content container">
      {/* <h4 className="contact-banner__description">
        Can’t wait to tell about your idea? We bet. That’s why we are happy to
        provide you with alternatives. Feel free to reach out using any of
        these contacts.
      </h4> */}
      <div className="contact-banner-list">
        <div className="contact-banner-list__item">
          <span className="contact-banner-list-title">
            <Shedule
              width="30"
              height="30"
              className="contact-banner-link__icon"
            />
            Contact us
          </span>
          <a href="tel:+380981990718" className="contact-banner-link">
            <PhoneIcon className="contact-banner-link__icon" />
            <span className="contact-banner-link__text">+38 098 19 90 718</span>
          </a>
          <a href={`mailto:hello@binerals.com`} className="contact-banner-link">
            <Letter className="contact-banner-link__icon" />
            <span className="contact-banner-link__text">
              hello@binerals.com
            </span>
          </a>
        </div>
        <div className="contact-banner-list__item">
          <span className="contact-banner-list-title">
            <PaperPlane
              width="30"
              height="30"
              className="contact-banner-link__icon"
            />
            Headquarters
          </span>
          <span className="contact-banner-list-adress">
            Bulgaria, Town of Sofia 1404, district of Sofia (capital) Stolichna
            municipality, Triaditsa region Manastirski livadi Housing Estate,
            bl. 30, entr. A, ap. 4
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default Banner
