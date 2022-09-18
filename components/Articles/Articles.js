import classnames from 'classnames'

import AticlesItem from './AticlesItem'

const Articles = ({
  className,
  children,
  title,
  list = [],
  hasAction = false,
  actionText = '',
  handleAction = () => null,
  isHidden = false,
}) => (
  <section className={classnames([className, 'articles'])} hidden={isHidden}>
    <div className="container">
      {title ? <h2 className="articles__title">{title}</h2> : null}
      {!!list.length ? (
        <div className="articles__list">
          {list.map(
            ({ imgSrc, date, title, description, linkSrc, tags }, index) => (
              <AticlesItem
                className="articles__item"
                imgSrc={imgSrc}
                date={date}
                title={title}
                description={description}
                linkSrc={linkSrc}
                tags={tags}
                key={'articles-item' + index}
              />
            ),
          )}
          {children}
        </div>
      ) : null}
      {hasAction ? (
        <button className="button button--empty" onClick={handleAction}>
          {actionText}
        </button>
      ) : null}
    </div>
  </section>
)

export default Articles
