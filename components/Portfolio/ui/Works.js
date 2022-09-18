import classnames from 'classnames'

import Work from './Work'

import list from 'datastore/Portfolio_WorksList'

const Works = ({ className }) => (
  <div className={classnames([className, 'works'])}>
    <div className="works__list">
      {list.map((work, index) => (
        <Work {...work} className="works__item" key={'work' + index} />
      ))}
    </div>
  </div>
)

export default Works
