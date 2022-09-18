import classnames from 'classnames'

import PopupLayout from 'layouts/PopupLayout'

import MailsInBoxBigIcon from 'components/Icons/MailsInBoxBig'

const TwoColsSubscribe = ({ className }) => (
  <div
    className={classnames([
      className,
      'popup-content',
      'popup-content--two-cols',
    ])}
  >
    <div className="popup-content__media">
      <MailsInBoxBigIcon className="popup-content__img" />
    </div>
    <div className="popup-content__inner">
      <p className="popup-content__title">Want More Great Content Like This?</p>
      <p className="popup-content__text">
        A weekly dose of the trends and insights you need to keep you ON top,
        from Binerals experts. In each week’s email, We will recap what happened
        in digital, what trends are important for entrepreneurs to watch, plus
        some fun surprises that you'll just have to sign up to see!
      </p>
      <div className="popup-content__form">
        <div className="popup-content__form-row">
          <div className="popup-content__form-col">
            <input type="email" className="field" placeholder="Your Email" />
          </div>
          <div className="popup-content__form-col">
            <button className="button button--big">
              Subscribe to our Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ({ isShown, onClose }) => (
  <PopupLayout isWide isVisible={isShown} closePopup={onClose}>
    <TwoColsSubscribe />
  </PopupLayout>
)
