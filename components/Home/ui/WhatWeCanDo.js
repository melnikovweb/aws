import Link from 'next/link'
import classnames from 'classnames'

import list from 'datastore/Home_WhatWeCanDoList'

const WhatWeCanDo = ({ className }) => (
  <section className={classnames([className, 'home-what-we-can-do'])}>
    <h2 className="page-box__title">What we can do for you</h2>
    <div className="what-we-can-do__wrap container cover-section">
      <div className="what-we-can-do__contents">
        <div className="what-we-can-do__list">
          {list.map(({ Icon, description, title, link }, index) => (
            <div
              className="what-we-can-do__item"
              key={'what-we-can-do' + index}
            >
              <div className="what-we-can-do__inner">
                <div className="what-we-can-do__icon">
                  <Icon />
                </div>
                <h3 className="what-we-can-do__title divider divider--bottom">
                  {title}
                </h3>
                <p className="what-we-can-do__description">{description}</p>
                <Link href={link}>
                  <a className="button button--empty hidden">More {'>>>'}</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default WhatWeCanDo
