import classnames from 'classnames'

import PopupLayout from 'layouts/PopupLayout'

import ThankYouIcon from 'components/Icons/ThankYou'

const ThankYou = ({ className }) => (
  <div
    className={classnames([className, 'popup-content', 'popup-content--blue'])}
  >
    <ThankYouIcon className="popup-content__img" />
    <p className="popup-content__title">Thank you!</p>
    <p className="popup-content__text">
      Check out your Inbox to download the PDF
    </p>
  </div>
)

export default ({ isShown, onClose }) => (
  <PopupLayout isWide isVisible={isShown} closePopup={onClose}>
    <ThankYou />
  </PopupLayout>
)
