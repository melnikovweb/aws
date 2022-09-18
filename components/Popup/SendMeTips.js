import classnames from 'classnames'

import PopupLayout from 'layouts/PopupLayout'

import MailboxIcon from 'components/Icons/Mailbox'

const SendMeTips = ({ className }) => (
  <div
    className={classnames([
      className,
      'popup-content',
      'popup-content--send-me-tips',
    ])}
  >
    <MailboxIcon className="popup-content__img" />
    <p className="popup-content__title">
      It’ll Be Nice to Hear from You How Do You Feel About this Article. <br />
      Feel Free to Share Your Emotions:
    </p>
    <div className="popup-content__form">
      <div className="popup-content__form-row">
        <div className="popup-content__form-col">
          <input type="email" className="field" placeholder="Your Email" />
        </div>
        <div className="popup-content__form-col">
          <button className="button button--big">Send Me Your Best Tips</button>
        </div>
      </div>
    </div>
  </div>
)

export default ({ isShown, onClose }) => (
  <PopupLayout isExtraWide isVisible={isShown} closePopup={onClose}>
    <SendMeTips />
  </PopupLayout>
)
