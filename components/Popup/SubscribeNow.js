import classnames from 'classnames'

import PopupLayout from 'layouts/PopupLayout'

import SubscribeIcon from 'components/Icons/Subscribe'

const SubscribeNow = ({ className }) => (
  <div
    className={classnames([className, 'popup-content', 'popup-content--white'])}
  >
    <SubscribeIcon className="popup-content__img" />
    <p className="popup-content__title">Subscribe Now</p>
    <p className="popup-content__text">
      Join the list of 32 154 subscribers and get the latest technology insights
      and our case studies into your inbox.
    </p>
    <div className="popup-content__form">
      <input
        type="email"
        className="field field--small"
        placeholder="Your E-mail"
      />
    </div>
    <div className="popup-content__agreement">
      <label className="agreement-label">
        <span className="agreement-label__text">
          Yes, I understand and agree to the <a href="/">Privacy Policy</a>
        </span>
      </label>
    </div>
    <button className="button button--big">Submit</button>
  </div>
)

export default ({ isShown, onClose }) => (
  <PopupLayout isVisible={isShown} closePopup={onClose}>
    <SubscribeNow />
  </PopupLayout>
)
