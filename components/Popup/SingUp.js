import classnames from 'classnames'

import PopupLayout from 'layouts/PopupLayout'

import SubscribeIcon from 'components/Icons/Subscribe'

const SingUp = ({ className }) => (
  <div className={classnames([className, 'popup-content'])}>
    <SubscribeIcon className="popup-content__img" />
    <p className="popup-content__title popup-content__title--uppercase">
      sign up and get the latest stories and Case studies to your inbox
    </p>
    <p className="popup-content__text">
      We won’t spam you, we will send just interesting case studies and best{' '}
      <br />
      practices once or twice per month.
    </p>
    <div className="popup-content__form">
      <div className="popup-content__form-row">
        <div className="popup-content__form-col">
          <input type="text" className="field" placeholder="Your first name" />
        </div>
        <div className="popup-content__form-col">
          <input type="email" className="field" placeholder="Your Email" />
        </div>
        <div className="popup-content__form-col">
          <button className="button button--big">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
)

export default ({ isShown, onClose }) => (
  <PopupLayout isWide isVisible={isShown} closePopup={onClose}>
    <SingUp />
  </PopupLayout>
)
