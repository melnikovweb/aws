import classnames from 'classnames'

import SectionHeader from 'components/SectionHeader'

export const OutsourceItem = ({ className, title, description }) => (
  <div className={classnames(className, 'page-stack-outsource-item')}>
    <h3 className="page-stack-outsource-item__title">{title}</h3>
    <p className="page-stack-outsource-item__description">{description}</p>
  </div>
)

const Outsource = ({ className, title, description, list = [], children }) => (
  <section className={classnames(className, 'page-stack-outsource container')}>
    <SectionHeader title={title} description={description} />
    <div className="page-stack-outsource__list">
      {list.map(
        ({ title, description, infoPre, infoMain, hasAction }, index) => (
          <OutsourceItem
            key={'outsource-item' + index}
            title={title}
            description={description}
          />
        ),
      )}
      {children}
    </div>
  </section>
)

export default Outsource
