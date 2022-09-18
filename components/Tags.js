import classnames from 'classnames'

const Tags = ({ className, list }) =>
  !!list.length ? (
    <ul className={classnames([className, 'tags'])}>
      {list.map(({ title, Icon, href }) => (
        <li
          className={classnames(['tag', { 'tag--item': href }])}
          key={'tag' + title}
        >
          {href ? (
            <a href={href} className="tag__link">
              {Icon ? <Icon className="tag__icon" /> : null}
              {title}
            </a>
          ) : (
            <>
              {Icon ? <Icon className="tag__icon" /> : null}
              {title}
            </>
          )}
        </li>
      ))}
    </ul>
  ) : null

export default Tags
