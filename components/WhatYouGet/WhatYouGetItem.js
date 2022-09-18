import classnames from 'classnames'

const WhatYouGetItem = ({
  className,
  children,
  Icon,
  title,
  description,
  additional,
}) => (
  <div className={classnames([className, 'what-you-get-item'])}>
    {Icon ? <Icon className="what-you-get-item__icon" /> : null}
    <div className="what-you-get-item__content what-you-get-item-content">
      {title ? (
        <h3 className="what-you-get-item-content__title">{title}</h3>
      ) : null}
      {additional ? (
        <div className="what-you-get-item-content__additional">
          {additional}
        </div>
      ) : null}
      {description ||
        (children ? (
          <div className="what-you-get-item-content__description divider divider--top">
            {description}
            {children}
          </div>
        ) : null)}
    </div>
  </div>
)

export default WhatYouGetItem
