import classnames from 'classnames'

import MailboxBigIcon from 'components/Icons/MailboxBig'

import PopupLayout from 'layouts/PopupLayout'

const TwoColsSendTips = ({ className }) => (
  <div
    className={classnames([
      className,
      'popup-content',
      'popup-content--two-cols',
    ])}
  >
    <div className="popup-content__media">
      <MailboxBigIcon className="popup-content__img" />
    </div>
    <div className="popup-content__inner">
      <p className="popup-content__title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <p className="popup-content__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
        consectetur non provident quas recusandae. Assumenda consequuntur
        eveniet exercitationem illo laudantium possimus voluptate? Accusantium,
        animi fugit nam ratione suscipit totam voluptates.
      </p>
      <div className="popup-content__form">
        <div className="popup-content__form-row">
          <div className="popup-content__form-col">
            <input type="email" className="field" placeholder="Your Email" />
          </div>
          <div className="popup-content__form-col">
            <button className="button button--big">
              Send Me Your Best Tips
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ({ isShown, onClose }) => (
  <PopupLayout isWide isVisible={isShown} closePopup={onClose}>
    <TwoColsSendTips />
  </PopupLayout>
)
