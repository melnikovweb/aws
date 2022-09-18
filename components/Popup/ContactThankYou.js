import classnames from 'classnames'

import PopupLayout from 'layouts/PopupLayout'

const ThankYouContact = ({ className, closePopup }) => (
  <div className={classnames([className, 'popup-content'])}>
    <p className="popup-content__title">Thanks for your request</p>
    <p className="popup-content__text">
      Our sales managers have already received your letter and are preparing to
      answer you as soon as possible
    </p>
    <button className="button button--big" onClick={closePopup}>
      Awesome!
    </button>
  </div>
)

export default ({ isShown, onClose }) => (
  <PopupLayout isVisible={isShown} closePopup={onClose}>
    <ThankYouContact closePopup={onClose} />
  </PopupLayout>
)
