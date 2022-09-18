import classnames from 'classnames'

const RequestExpertsItem = ({
  Icon,
  description,
  additionalText,
  AdditionalIcon,
  additionalPercents,
}) => (
  <div className="request-experts-item">
    {Icon ? <Icon className="request-experts-item__icon" /> : null}
    <p className="request-experts-item__description divider divider--bottom">
      {description}
    </p>
    {additionalPercents ? (
      <p className="request-experts-item__additional request-experts-item__additional--percents">
        {additionalPercents}
      </p>
    ) : null}
    {additionalText ? (
      <p className="request-experts-item__additional request-experts-item__additional--text">
        {additionalText}
      </p>
    ) : null}
    {AdditionalIcon ? (
      <AdditionalIcon className="request-experts-item__additional request-experts-item__additional--icon" />
    ) : null}
  </div>
)

const RequestExperts = ({
  className,
  title = '',
  items = [],
  hasAction = false,
  handleAction = () => null,
  actionText = '',
  isTitleUppercase = false,
}) => (
  <section
    className={classnames([
      className,
      'request-experts',
      { 'request-experts--no-action': !hasAction },
      'container',
      'cover-section',
    ])}
  >
    {title ? (
      <h2
        className={classnames([
          'page-box__title',
          'request-experts__title',
          { 'request-experts__title--uppercase': isTitleUppercase },
        ])}
      >
        {title}
      </h2>
    ) : null}
    <div className="request-experts__list">
      {items.map(
        (
          {
            Icon,
            description,
            additionalText,
            AdditionalIcon,
            additionalPercents,
          },
          index,
        ) => (
          <RequestExpertsItem
            key={`request${index}`}
            Icon={Icon}
            description={description}
            AdditionalIcon={AdditionalIcon}
            additionalText={additionalText}
            additionalPercents={additionalPercents}
          />
        ),
      )}
    </div>
    {hasAction ? (
      <button
        className="request-experts__button button button--big"
        onClick={handleAction}
      >
        {actionText}
      </button>
    ) : null}
  </section>
)

export default RequestExperts
