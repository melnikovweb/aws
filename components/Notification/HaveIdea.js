import classnames from 'classnames'

import PopupLayout from 'layouts/PopupLayout'

import HaveIdeaIcon from 'components/Icons/HaveIdea'

const HaveIdea = ({ className }) => (
  <div className={classnames([className, 'notification-content'])}>
    <HaveIdeaIcon className="notification-content__img" />
    <div className="notification-content__title">
      <p className="notification-content__title-content">Have an Idea?</p>
      <p className="notification-content__title-content notification-content__title-content--secondary">
        WE CAN BUILD IT!
      </p>
    </div>
    <button className="notification-content__button--talk button button--full-width button--big">
      Let’s Talk
    </button>
    <button className="button button--full-width button--big button--empty button--clear">
      No, Thanks
    </button>
  </div>
)

export default ({ isShown, onClose }) => (
  <PopupLayout notice isVisible={isShown} closePopup={onClose}>
    <HaveIdea />
  </PopupLayout>
)
