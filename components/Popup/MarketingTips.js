import classnames from 'classnames'

import Checkbox from 'components/Checkbox'

import PopupLayout from 'layouts/PopupLayout'

const MarketingTips = ({ className }) => (
  <div
    className={classnames([className, 'popup-content', 'popup-content--white'])}
  >
    <p className="popup-content__title">Free Marketing Tips</p>
    <p className="popup-content__text">
      We believe in time saving, actionable information.
      <br />
      <br />
      Feel free to receive our powerful
      <br /> marketing tips delivered directly to your inbox.
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
          I give you <a href="/">GDPR permission</a> to email me
        </span>
      </label>
    </div>
    <button className="button button--big">Get My Free Tips</button>
  </div>
)

export default ({ isShown, onClose }) => (
  <PopupLayout bordered isVisible={isShown} closePopup={onClose}>
    <MarketingTips />
  </PopupLayout>
)
