import Link from 'next/link'
import classnames from 'classnames'

import list from 'datastore/Home_ProcessList'

const Mind = ({ className }) => (
  <section className={classnames([className, 'mind'])}>
    <div className="container">
      <h2 className="page-box__title">WHY HIRE US</h2>
      <div className="mind__content processes">
        <div className="processes__list">
          {list.map(({ title, description }, index) => (
            <div className="processes__item" key={'process' + index}>
              <div className="process">
                <h4 className="process__title">{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="processes__footer">
          <Link href="/process">
            <a className="button button--empty">Processes</a>
          </Link>
          <span className="processes__button-hint">
            Only 3 minutes read how we do business
          </span>
        </div>
      </div>
    </div>
  </section>
)

export default Mind
