import classnames from 'classnames'
import WhatYouGetSpoiler from './WhatYouGetSpoiler'
import WhatYouGetItem from './WhatYouGetItem'

const WhatYouGet = ({
  className,
  children,
  title,
  subTitle,
  hasSpoiler = false,
  spoilerList = [],
  spoilerTitle = '',
  list = [],
}) => (
  <section className={classnames([className, 'what-you-get'])}>
    <div className="container">
      {title ? <h2 className="what-you-get__title">{title}</h2> : null}
      {subTitle ? <p className="what-you-get__sub-title">{subTitle}</p> : null}
      {hasSpoiler ? (
        <WhatYouGetSpoiler title={spoilerTitle} list={spoilerList} />
      ) : null}
      <div className="what-you-get-list">
        {list.map(({ Icon, title, description, additional }, index) => (
          <WhatYouGetItem
            Icon={Icon}
            title={title}
            description={description}
            additional={additional}
            key={'what-you-get-item' + index}
          />
        ))}
        {children}
      </div>
    </div>
  </section>
)

export default WhatYouGet
