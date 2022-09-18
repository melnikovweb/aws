import classnames from 'classnames'

const Section = props => {
  const {
    title,
    description,
    description2,
    icon,
    children,
    className,
    coverSection,
  } = {
    ...props,
  }

  const desc = description ? (
    <p className="page-box__sub-description">{description}</p>
  ) : null
  const desc2 = description2 ? (
    <p
      className={classnames('page-box__sub-description2', {
        additional: description,
      })}
    >
      {description2}
    </p>
  ) : null
  const cover = coverSection ? 'cover-section' : ''
  const imgIcon = icon ? (
    <div className="page-box__sub-title-icon">{icon()}</div>
  ) : (
    ''
  )
  return (
    <div className={className + ' section-box ' + cover}>
      {imgIcon}
      <h2
        className={classnames('page-box__sub-title', {
          'page-box__sub-title--decor': description || description2,
        })}
      >
        {title}{' '}
      </h2>
      <div className={'page-box__sub-content'}>
        {desc}
        {desc2}
        {children}
      </div>
    </div>
  )
}

export default Section
