import Link from 'next/link'
import classnames from 'classnames'

import Tags from 'components/Tags'

const AticlesItem = ({
  className,
  imgSrc = '',
  title = '',
  date = '',
  description = '',
  tags = [],
  linkSrc = '',
}) => (
  <div className={classnames([className, 'articles-item'])}>
    {imgSrc ? (
      <img className="articles-item__img" src={imgSrc} alt={title} />
    ) : null}
    {date ? <p className="articles-item__date">{date}</p> : null}
    <h3 className="articles-item__title">
      <Link href={linkSrc}>
        <a className="articles-item__link">{title}</a>
      </Link>
    </h3>
    {description ? (
      <p className="articles-item__description">{description}</p>
    ) : null}
    <Tags list={tags} />
  </div>
)

export default AticlesItem
