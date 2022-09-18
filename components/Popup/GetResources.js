import classnames from 'classnames'

import PopupLayout from 'layouts/PopupLayout'

const GetResources = ({ className }) => (
  <div
    className={classnames([
      className,
      'popup-content',
      'popup-content--white',
      'popup-content--resources',
    ])}
  >
    <p className="popup-content__title">
      Download a curated list of requirement documentation for your project
    </p>
    <p className="popup-content__text">
      Losing time and money on endless re-designs and changes to business model
      and product features? This is the result of building something without a
      written specs while working with a software development company and is the
      most annoying thing possible for entrepreneur or investor. To avoid that,
      you should check out these 5 important documents before you begin your
      next project.
    </p>
    <div className="popup-content__form">
      <div className="popup-content__form-row">
        <div className="popup-content__form-col">
          <input type="email" className="field" placeholder="Your Email" />
        </div>
        <div className="popup-content__form-col">
          <button className="button button--big">Download</button>
        </div>
      </div>
    </div>
  </div>
)

export default ({ isShown, onClose }) => (
  <PopupLayout isWide isVisible={isShown} closePopup={onClose}>
    <GetResources />
  </PopupLayout>
)
