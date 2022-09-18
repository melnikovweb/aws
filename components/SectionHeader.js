import classnames from 'classnames'

//TODO - integrate this component to other pages and clean duplicate styles
const SectionHeader = ({
  children,
  className,
  title,
  description,
  Icon,
  alignCenter = false,
  uppercaseTitle = false,
}) => (
  <div
    className={classnames(
      className,
      'section-header',
      alignCenter && 'section-header--center',
    )}
  >
    {title ? (
      <div className="section-header__title section-header-title">
        {Icon ? <Icon className="section-header-title__icon" /> : null}
        <h2
          className={classnames(
            'section-header-title__text',
            uppercaseTitle && 'section-header-title__text--uppercase',
          )}
        >
          {title}
        </h2>
      </div>
    ) : null}
    {description ? (
      <p className="section-header__description">{description}</p>
    ) : null}
    {children}
  </div>
)

export default SectionHeader
